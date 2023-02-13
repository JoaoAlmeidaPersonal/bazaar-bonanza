const Product = require("../models/ProductModel");
const recordsPerPage = require("../config/pagination");

const getProducts = async (req, res, next) => {
  try {
    //Filter
    let query = {};
    let queryCondition = false;

    let priceQueryCondition = {};
    let ratingQueryCondition = {};
    let categoryQueryCondition = {};
    if (req.query.price) {
      queryCondition = true;
      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }
    if (req.query.rating) {
      queryCondition = true;
      ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } };
    }

    const categoryName = req.params.categoryName || "";
    if (categoryName) {
      queryCondition = true;
      let a = categoryName.replaceAll(",", "/");
      var regEx = new RegExp("^" + a);
      categoryQueryCondition = { category: regEx };
    }

    if (req.query.category) {
      queryCondition = true;
      let a = req.query.category.split(",").map((item) => {
        if (item) {
          return new RegExp("^" + item);
        }
      });
      categoryQueryCondition = {
        category: { $in: a },
      };
    }

    let attrsQueryCondition = [];
    if (req.query.attrs) {
      queryCondition = true;
      attrsQueryCondition = req.query.attrs.split(",").reduce((acc, item) => {
        if (item) {
          let a = item.split("-");
          let values = [...a];
          values.shift();
          let a1 = {
            attrs: {
              $elemMatch: {
                key: a[0],
                value: { $in: values },
              },
            },
          };
          acc.push(a1);
          return acc;
        } else {
          return acc;
        }
      }, []);
    }

    //pagination
    const pageNum = Number(req.query.pageNum) || 1;

    //Sorting Options
    let sort = {};
    const sortOptions = req.query.sort || "";
    if (sortOptions) {
      let sortOpt = sortOptions.split("_");
      sort = { [sortOpt[0]]: Number(sortOpt[1]) };
    }

    const searchQuery = req.params.searchQuery || "";
    let searchQueryCondition = {};
    let select = {};

    if (searchQuery) {
      queryCondition = true;
      searchQueryCondition = { $text: { $search: searchQuery } };
      select = {
        score: { $meta: "textScore" },
      };
      sort = { score: { $meta: "textScore" } };
    }

    if (queryCondition) {
      query = {
        $and: [
          priceQueryCondition,
          ratingQueryCondition,
          categoryQueryCondition,
          ...attrsQueryCondition,
          searchQueryCondition,
        ],
      };
      console.log(query);
    }

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
      .select(select)
      .sort(sort)
      .skip(recordsPerPage * (pageNum - 1))
      .limit(recordsPerPage);
    res.json({
      products,
      pageNum,
      paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("reviews")
      .orFail();
    res.json(product);
  } catch (err) {
    next(err);
  }
};

const getBestsellers = async (req, res, next) => {
  try {
    const products = await Product.aggregate([
      { $sort: { category: 1, sales: -1 } },
      { $group: { _id: "$category", doc_with_max_sales: { $first: "$$ROOT" } } },
      { $replaceWith: "$doc_with_max_sales" },
      // { $match: { sales: { $gt: 0 } } },
      { $project: { _id: 1, name: 1, images: 1, category: 1, description: 1 } },
      { $limit: 3 }
    ])
    res.json(products)
  } catch(err) {
    next(err)
  }
}

module.exports = {getProducts, getProductById, getBestsellers};


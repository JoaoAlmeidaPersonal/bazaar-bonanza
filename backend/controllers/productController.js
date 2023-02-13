const Product = require("../models/ProductModel");
const recordsPerPage = require("../config/pagination");

const getProducts = async (req, res, next) => {
  try {
    //Filter
    let query = {};
    let queryCondition = false

    let priceQueryCondition = {}
    let ratingQueryCondition = {}
    let categoryQueryCondition = {}
    if (req.query.price) {
      queryCondition = true
      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }
    if (req.query.rating) {
      queryCondition = true
      ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } };
    }

    const categoryName = req.params.categoryName || ""
    if(categoryName) {
        queryCondition = true
      let a = categoryName.replaceAll(",", "/")
      var regEx = new RegExp("^"+a)
      categoryQueryCondition = {category : regEx}
    }

    if(req.query.category) {
      queryCondition = true
      let a = req.query.category.split(",").map((item) => {
        if(item) {
          return new RegExp("^"+item)
        }
      })
      categoryQueryCondition = {
        category : {$in: a}
      }
    }

    if(queryCondition) {
      query = {
        $and: [priceQueryCondition,ratingQueryCondition,categoryQueryCondition]
      }
      console.log(query)
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

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
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

module.exports = getProducts;

const Order = require("../models/OrderModel")

const getOrders = async (req, res, next) => {
    try {
        const users = await Order.find({})
        return res.json(users)
    } catch (err) {
        next(err)
    }
}

module.exports = getOrders

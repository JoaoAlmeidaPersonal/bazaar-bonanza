const Category = require("../models/UserModel")

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).select("-password")
        return res.json(users)
    } catch (err) {
        next(err)
    }
}

module.exports = getUsers

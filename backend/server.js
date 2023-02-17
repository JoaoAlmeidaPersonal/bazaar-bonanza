const express = require('express')
const app = express()
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")
const port = 3000

app.use(express.json())
app.use(fileUpload())
app.use(cookieParser())
const apiRoutes = require("./routes/apiRoutes")

app.use('/api', apiRoutes)

// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

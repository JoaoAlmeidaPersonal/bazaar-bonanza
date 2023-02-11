const express = require('express')
const app = express()
const port = 3000

const apiRoutes = require("./routes/apiRoutes")

app.use('/api', apiRoutes)

// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

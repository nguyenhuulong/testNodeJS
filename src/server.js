import express from "express"
import bodyParser from "body-parser" // lấy parameters
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
require('dotenv').config()

let app = express()
//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: true}))
viewEngine(app)
initWebRoutes(app)
let port = process.env.PORT || 6969
//port === undefined => port = 6969

app.listen(port, () => {
    console.log("Backend NodeJS is running on the port: " + port)
})


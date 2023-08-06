import express from "express"
import bodyParser from "body-parser"

import {AdminRoutes, VandorRoute} from "./routes"


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/admin", AdminRoutes)
app.use("/vandor", VandorRoute)


app.listen(8080, () => {
    console.log("Helo app is listening on port 8080")
})
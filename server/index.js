import express from "express"
import connectDb from "./lib/db/connectDb.js"
import indexRoutes from "./lib/routes/index.routes.js"
import bodyParser from "body-parser"
import cors from "cors"


const port=8080
const app= express()



connectDb()


app.use(bodyParser.urlencoded({encodeURI:false}))
app.use(bodyParser.json())

app.use(
    cors(
        {
            origin:"http://localhost:5173"
        }
    )
)

app.use(indexRoutes)





app.get("/",(req,res)=>{
    res.send("Hello  , we are learning about DB-initgration")
})











app.listen(port,()=>{
    console.log(`app is running at http://localhost:${port}`);
})












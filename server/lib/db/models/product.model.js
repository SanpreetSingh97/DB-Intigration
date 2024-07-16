import mongoose from "mongoose";

const productSchema= mongoose.Schema({
    title:String,
    prise:Number,
    catagory:String,
    rating: Number,

})

const  Products=mongoose.model("Product",productSchema)

export default  Products

import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    body:String,
    views:Number
})

const Posts= mongoose.model("Posts",postSchema)


export default Posts
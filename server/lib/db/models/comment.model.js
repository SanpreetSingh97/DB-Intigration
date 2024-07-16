import mongoose from "mongoose";

const commentSchema= mongoose.Schema({
    userName:String,
    body:String,
    likes:Number
},{timestamps:true})


const Comments= mongoose.model("Comments",commentSchema)

export default Comments
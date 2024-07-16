import mongoose from "mongoose";

const todoSchema=mongoose.Schema({
todo:String,
isCompleted:Boolean
},{timestamps:true})

const Todo= mongoose.model("Todo",todoSchema)


export default Todo
import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

const Users= mongoose.model("Users",userSchema)


export default Users
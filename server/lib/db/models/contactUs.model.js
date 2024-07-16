import mongoose from "mongoose";

const contactUsSchema= mongoose.Schema({
    name:String,
    email:String,
    message:String
},{timestamps:true})


const ContactUs= mongoose.model("ContactUs",contactUsSchema)

export default ContactUs
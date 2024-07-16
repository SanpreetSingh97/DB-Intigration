import mongoose from "mongoose"

async function connectDb(){
    mongoose.connect("mongodb://127.0.0.1:27017/Db-intigration")
    console.log(`Database is connected `);
}

connectDb().catch(err=>console.log(`Database connection err   : ${err}`))

export default  connectDb
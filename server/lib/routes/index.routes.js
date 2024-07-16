import { Router } from "express";
import productRouter from "./product.routes.js";
import postRoute from "./post.routes.js";
import todoRoute from "./todo.routes.js";
import commentRoute from "./comment.routes.js";
import contactUsRouter from "./contactUs.routes.js";
import userRoute from "./user.routes.js";

const indexRoutes=Router()

indexRoutes.use("/product",productRouter)
indexRoutes.use("/post",postRoute)
indexRoutes.use("/todo",todoRoute)
indexRoutes.use("/comment",commentRoute)
indexRoutes.use("/contact",contactUsRouter)
indexRoutes.use("/user",userRoute)



export default indexRoutes
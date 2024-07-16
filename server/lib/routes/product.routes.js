import { Router } from "express";
import {getProduct ,addProduct, getProductById, updateProduct, deleteProduct}from "../controllers/product.controllers.js";

const productRouter= Router()

productRouter.route("/").get(getProduct).post(addProduct)
productRouter.route("/:productId").get(getProductById).put(updateProduct).delete(deleteProduct)



export default productRouter
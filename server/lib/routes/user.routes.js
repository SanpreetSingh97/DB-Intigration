import { Router } from "express";
import { addPost, deletePost, getPost, getPostById, updatePosts } from "../controllers/post.controllers.js";
import { getUser, loginUser, signupUser } from "../controllers/user.controller.js";

const userRoute= Router()

userRoute.route("/").get(getUser)
userRoute.route("/signup").post(signupUser)
userRoute.route("/login").post(loginUser)


export default userRoute
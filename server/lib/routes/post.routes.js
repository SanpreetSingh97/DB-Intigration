import { Router } from "express";
import { addPost, deletePost, getPost, getPostById, updatePosts } from "../controllers/post.controllers.js";

const postRoute= Router()

postRoute.route("/").get(getPost).post(addPost)
postRoute.route("/:postId").get(getPostById).put(updatePosts).delete(deletePost)



export default postRoute
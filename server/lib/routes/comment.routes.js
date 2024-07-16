import { Router } from "express";
import { addComment, deleteComment, getComment, getCommentById, updateComments } from "../controllers/comment.controller.js";

const commentRoute= Router()

commentRoute.route("/").get(getComment).post(addComment)
commentRoute.route("/:commentId").get(getCommentById).put(updateComments).delete(deleteComment)



export default commentRoute
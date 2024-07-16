import Router from "express"
import { addTodo, deleteTodo, getByIdTodo, getTodo, updateTodo } from "../controllers/todo.controllers.js"

const todoRoute=Router()


todoRoute.route("/").get(getTodo).post(addTodo)
todoRoute.route("/:todoId").get(getByIdTodo).put(updateTodo).delete(deleteTodo)









export default todoRoute
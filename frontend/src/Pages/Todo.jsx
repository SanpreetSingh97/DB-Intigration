import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoTable from "../components/TodoTable";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [type, setType] = useState("all");

  const getdata = async () => {
    const responce = await fetch("http://localhost:8080/todo");
    const data = await responce.json();
    setTodo(data);
  };

  useEffect(() => {
    getdata();
  }, []);


  const deleteTodo=async(id)=>{
   await axios.delete(`http://localhost:8080/todo/${id}`)
    getdata()
}
  return (
    <>
      <div className="container-fluid  container-lg py-4 bg-light rounded-4 my-5 mt-100 text-center p-5">
        <h1 className="fw-bold"> Todo List</h1>

        <div className=" d-block d-md-flex justify-content-between align-items-center">
          <div className="d-block d-sm-flex m-auto">
            <button
              className={
                type == "completed"
                  ? "btn btn-outline-info  bg-info  text-dark fw-bold fs-4 shadow  rounded-pill px-3 m-2 my-4  "
                  : "btn btn-outline-info  text-dark fw-bold fs-4 shadow  rounded-pill px-3 m-2 my-4  "
              }
              onClick={() => setType("completed")}
            >
              Completed
            </button>
            <button
              className={
                type == "all"
                  ? "btn btn-outline-info  bg-info  text-dark fw-bold fs-4 shadow  rounded-pill px-3 m-2 my-4  "
                  : "btn btn-outline-info  text-dark fw-bold fs-4 shadow  rounded-pill px-3 m-2 my-4  "
              }
              onClick={() => setType("all")}
            >
              All Todos
            </button>
            <button
              className={
                type == "uncompleted"
                  ? "btn btn-outline-info  bg-info  text-dark fw-bold fs-4 shadow  rounded-pill px-3 m-2 my-4  "
                  : "btn btn-outline-info  text-dark fw-bold fs-4 shadow  rounded-pill px-3 m-2 my-4  "
              }
              onClick={() => setType("uncompleted")}
            >
              Panding
            </button>
          </div>
          <Link
            className="btn btn-outline-info  text-dark fw-bold fs-4 shadow  rounded-pill px-5 my-4  "
            to="/createTodo"
          >
            {" "}
            Create Todo
          </Link>
        </div>
        <div className="table rounded-4 my-4 w-100">
          {type == "completed" && (
            <TodoTable
              data={todos.filter((todo) => todo.isCompleted == true)}
              deleteTodo={deleteTodo}
            />
          )}
          {type == "all" && <TodoTable data={todos}
              deleteTodo={deleteTodo} />}
          {type == "uncompleted" && (
            <TodoTable
              data={todos.filter((todo) => todo.isCompleted == false)}
              deleteTodo={deleteTodo}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;

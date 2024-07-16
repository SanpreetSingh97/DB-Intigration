import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const TodoTable = ({data,deleteTodo}) => {

  
  return (
    <table className=" position-relative rounded-4   w-100   ">
    <thead className="position-sticky top-0 ">
      <tr className=" w-100 fs-4 mb-4 rounded-pill bg1 shadow  px-3 ">
        <th className="p-3  text-center  w-25">Is Completed</th>
        <th className="p-3 w-50 text-center">Task</th>
        <th className="p-3  text-center w-25">Change</th>
      </tr>
    </thead>
    <tbody>

{data.map(todo=>(
    <tr className=" w-100 fs-4 mb-4 rounded-pill bg1 shadow-sm  px-3 ">
    <td className="p-3 text-capitalize  text-center w-25">{todo.isCompleted==true?"✔":"😴"}</td>
    <td className="p-3 text-capitalize w-50 text-center">{todo.todo}</td>
    <td className="p-3 text-capitalize  text-center w-25">
    <div className="w-100 d-flex align-items-center justify-content-center">
                      {" "}
                      <Link
                        href="#"
                        className="btn btn-outline-primary me-2"
                        to={`/editTodo/${todo._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        href="#"
                        className="btn btn-outline-danger ms-2"
                        onClick={() => deleteTodo(todo._id)}
                      >
                        Delete
                      </button>
                    </div>

    </td>
    </tr>
))}


  
      
    </tbody>
  </table>
  )
}

export default TodoTable
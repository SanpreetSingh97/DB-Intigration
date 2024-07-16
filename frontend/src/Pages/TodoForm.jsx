import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import axios from "axios";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    todo: "",
    isCompleted: false,
  });

  const validationSchema = yup.object({
    todo: yup.string(),
    isCompleted: yup.boolean(),
  });

  const { id } = useParams();

  const navigate = useNavigate();

const getData=async()=>{
    const responce= await fetch(`http://localhost:8080/todo/${id}`)
    const data= await responce.json()
    setTodo(data)
}
useEffect(()=>{
    id&&getData()
},[id])

  const handelSubmit= (values)=>{
    id?(
 axios.put(`http://localhost:8080/todo/${id}`,values)
    ):(
       
  axios.post(`http://localhost:8080/todo`,values)
    )

    navigate("/todo")
  }

  return (
    <>
      <div className="container h100vh p-4 text-center">
        <h2 className="mb-4">{id ? "Edit ToDo" : "Create Todo"}</h2>

        <div className="form">
          <Formik
            initialValues={todo}
            validationSchema={validationSchema}
            enableReinitialize
              onSubmit={handelSubmit}
          >
         {({isSubmitting})=>(
                <Form className=" mt-5 bg-light text-center p-5 rounded-4 shadow">
                <div className="form-group d-flex justify-content-center  align-items-center  fs-4 my-5 ">
                  <label className=" ps-3 me-4 pb-0 " htmlFor="todo">
                    Todo
                  </label>
                  <Field
                    className="form-control fs-5 ps-3 w-50  rounded-pill my-2 bg1 shadow  border-2 border-light-subtle p-2"
                    name="todo"
                  />
                  <ErrorMessage
                    component="p"
                    name="todo"
                    className=" text-danger"
                  />
                </div>
                <div className="form-group d-flex justify-content-center  align-items-center w-100  fs-4 my-5   ">
                  <label className=" ps-3 me-4 pb-0 " htmlFor="isCompleted">
                    Is Completed
                  </label>
                  <Field
                    className="form-check-input fs-5 ps-3   rounded-pill my-2 bg1 shadow  border-2 border-light-subtle p-2"
                    type="checkbox"
                    name="isCompleted"
                    
                  />
                  <ErrorMessage
                    component="p"
                    name="isCompleted"
                    className=" text-danger"
                  />
                </div>
   
                <button
                  type="submit"
                  className="btn btn-outline-secondary text-dark bg1 mt-3  fw-bold fs-5 rounded-pill px-4 "
                  disabled={isSubmitting}
               
                >
                  {id ? "Edit ToDo" : "Create Todo"}
                </button>
              </Form>
         )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default TodoForm;

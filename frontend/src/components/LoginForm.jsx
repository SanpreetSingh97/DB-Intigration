import React from 'react'
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


const LoginForm = () => {
    const[user,setUser]=useState({
     
        email:"",
        password:""
    })

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
      });

      const handleSubmit = (values) => {
       
          axios.post("http://localhost:8080/user/login", values).then(() => {
        //    navigate("/home");
          });
      
      };

  return (
    <>
    <MDBCol col='4' md='6'>


    <div className=" container-fluid container-lg my-4 bg-light p-4 rounded-4">
    <h1 className=" mb-3 ">Login</h1>
    <Formik
      initialValues={user}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className=" w-100 fs-4 text-end p-4 ">
       
          <div className="form-group align-items-center fs-4 d-flex justify-content-around my-3">
            <label htmlFor="email">Email</label>
            <Field name="email" className="form-control fs-5 my-2 w-75 border-1 rounded-pill p-2 ps-3 shadow" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            /></div>
      
          <div className="form-group align-items-center fs-4 d-flex justify-content-around my-3">
            <label htmlFor="password">Password</label>
            <Field name="password" className="form-control fs-5 my-2 w-75 border-1 rounded-pill p-2 ps-3 shadow" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary mt-3  fw-bold fs-5 rounded-pill px-4 "
            disabled={isSubmitting}
          >
           Login
          </button>
        </Form>
      )}
    </Formik>
  </div>

    </MDBCol>












  
    </>
  )
}

export default LoginForm
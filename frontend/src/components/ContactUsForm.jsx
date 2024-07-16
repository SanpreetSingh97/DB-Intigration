import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';

const ContactUsForm = () => {
  
    const navigate = useNavigate(); 
    
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit =async (values) => {
   

   await axios.post("http://localhost:8080/contact", values)
  
   navigate("/") 
    
  };


  return (
    <div className="  container-fluid container-lg my-4 bg-light p-4 rounded-4">
    <Formik
      initialValues={contact}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className=" w-100 fs-4 text-center p-4 ">
          <div className="form-group  fs-4 mb-5">
            <label  htmlFor="name">Name</label>
            <Field name="name" className="form-control fs-5 my-2 w-100 border-1 rounded-pill p-3 ps-3 shadow" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group  fs-4 mb-5">
            <label  htmlFor="email">Email</label>
            <Field name="email" className="form-control fs-5 my-2 w-100 border-1 rounded-pill p-3 ps-3 shadow" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group  fs-4 mb-5">
            <label  htmlFor="message">Message</label>
            <Field name="message" as="textarea" className="form-control fs-5 my-2 w-100 border-1 rounded-pill p-3 ps-3 shadow" />
            <ErrorMessage
              name="message"
              component="div"
              className="text-danger"
            />
          </div>
        
        <SubmitBtn disabled={isSubmitting}/>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default ContactUsForm
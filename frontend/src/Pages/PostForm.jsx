import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const PostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: "", body: "", views: "" });
  
    const getData=async()=>{
        const responce= await fetch(`http://localhost:8080/post/${id}`)
    const data= await responce.json()
    setPost(data)
   
    
    }
    useEffect(() => {
    id&&getData()
    }, [id]);
  
    const validationSchema = Yup.object({
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Body is required"),
      views: Yup.number(),
    });
  
    const handleSubmit = (values) => {
      if (id) {
        axios.put(`http://localhost:8080/post/${id}`, values).then(() => {
         navigate("/post");
        });
      } else {
        axios.post("http://localhost:8080/post", values).then(() => {
         navigate("/post");
        });
      }
    };
  
  return (
    <div className=" container-fluid container-lg my-4 bg-light p-4 rounded-4">
    <h1 className=" mb-3 ">{id ? "Edit Post" : "Create Post"}</h1>
    <Formik
      initialValues={post}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className=" w-100 fs-4 text-end p-4 ">
          <div className="form-group align-items-center fs-4 d-flex justify-content-around my-3">
            <label htmlFor="title">Title</label>
            <Field name="title" className="form-control fs-5 my-2 w-75 border-1 rounded-pill p-2 ps-3 shadow" />
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group align-items-center fs-4 d-flex justify-content-around my-3">
            <label htmlFor="body">Body</label>
            <Field name="body" as="textarea" className="form-control fs-5 my-2 w-75 border-1 rounded-pill p-2 ps-3 shadow" />
            <ErrorMessage
              name="body"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group align-items-center fs-4 d-flex justify-content-around my-3">
            <label htmlFor="views">Views</label>
            <Field name="views" className="form-control fs-5 my-2 w-75 border-1 rounded-pill p-2 ps-3 shadow" />
            <ErrorMessage
              name="views"
              component="div"
              className="text-danger"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary mt-3  fw-bold fs-5 rounded-pill px-4 "
            disabled={isSubmitting}
          >
            {id ? "Update" : "Create"}
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default PostForm
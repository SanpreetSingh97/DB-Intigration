import axios from "axios";
import { ErrorMessage, Form, Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    title: "",
    prise: null,
    category: "",
    raring: null,
  });
  useEffect(() => {
    getData();
  }, [id]);
  const getData = async () => {
    const responce = await fetch(`http://localhost:8080/product/${id}`);
    const data = await responce.json();
    setProducts(data);
  };

  const validationSchema = Yup.object({
    title: Yup.string(),
    prise: Yup.number(),
    catagory: Yup.string(),
    rating: Yup.number(),
  });

  const handelSubmit = (value) => {
    console.log(value);
    id
      ? axios.put(`http://localhost:8080/product/${id}`, value)
      : axios.post(`http://localhost:8080/product`, value);

    navigate("/product");
  };

  return (
    <>
      <div className="container">
        <h1>{id ? "Edit Product" : "Create Product"}</h1>

        <Formik
          initialValues={products}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handelSubmit}
        >
          {({ isSubmitting }) => (
            <Form className=" mt-5 bg-light text-center p-5 rounded-4 shadow">
              <div className="form-group d-flex justify-content-around  align-items-center  fs-4 my-3 ">
                <label className=" ps-3 mb-0 pb-0 " htmlFor="title">
                  Title
                </label>
                <Field
                  name="title"
                  className="form-control fs-5 ps-3 w-75  rounded-pill my-2 bg-light-subtle shadow  border-2 border-light-subtle p-2"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group d-flex justify-content-around  align-items-center fs-4 my-3 ">
                <label className=" ps-3 mb-0 pb-0 " htmlFor="prise">
                  Prise
                </label>
                <Field
                  name="prise"
                  className="form-control fs-5 ps-3 w-75  rounded-pill my-2 bg-light-subtle shadow  border-2 border-light-subtle p-2"
                />
                <ErrorMessage
                  name="prise"
                  component="p"
                  className=" text-danger"
                />
              </div>
              <div className="form-group d-flex justify-content-around  align-items-center fs-4 my-3 ">
                <label className=" ps-3 mb-0 pb-0 " htmlFor="catagory">
                  Catagory
                </label>
                <Field
                  name="catagory"
                  className="form-control fs-5 ps-3 w-75  rounded-pill my-2 bg-light-subtle shadow  border-2 border-light-subtle p-2"
                />
                <ErrorMessage
                  name="catagory"
                  component="p"
                  className=" text-danger"
                />
              </div>
              <div className="form-group d-flex justify-content-around  align-items-center fs-4 my-3 ">
                <label className=" ps-3 mb-0 pb-0 " htmlFor="rating">
                  Rating
                </label>
                <Field
                  name="rating"
                  className="form-control fs-5 ps-3 w-75  rounded-pill my-2 bg-light-subtle shadow  border-2 border-light-subtle p-2"
                />
                <ErrorMessage
                  name="rating"
                  component="p"
                  className=" text-danger"
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
    </>
  );
};

export default ProductForm;

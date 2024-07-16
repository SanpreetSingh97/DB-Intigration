import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "../../public/product.jpg";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const responce = await fetch("http://localhost:8080/product");
    const data = await responce.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/product/${id}`);
    getProducts();
  };

  return (
    <>
      <div className="container-fluid container-lg py-4 bg-light rounded-4 my-5 mt-100 text-center">
        <h1 className="fw-bold"> List of Products</h1>

        <div className=" text-end">
          <Link
            className="btn btn-outline-info  text-dark fw-bold fs-4 shadow  rounded-pill px-5 my-4  "
            to="/createProduct"
          >
            {" "}
            Create Product
          </Link>

          <div className="d-flex flex-wrap text-start align-items-sm-stretch w-100  justify-content-center row">
            {products?.map((product) => (
              <div
                key={product._id}
                className=" col-12  col-md-6 col-xxl-3 col-lg-4  p-2"
              >
                <div className=" rounded-4 bg-white shadow-sm p-2 overflow-hidden h-100">
                  <img
                    src={image}
                    className="card-img-top rounded-top-2 "
                    alt="..."
                  />
                  <div className="card-body py-3 overflow-hidden">
                    <h3 className="card-title  text-capitalize mb-3">
                      {product.title}
                    </h3>
                    <p className="card-text fw-bold fs-5">
                      Only on{" "}
                      <span className=" fs-6 bg-warning">
                        <del>{product.prise*22}</del>
                      </span>{" "}
                      ${product.prise}
                    </p>
                    <p className="card-text">{product.rating}</p>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      {" "}
                      <Link
                        href="#"
                        className="btn btn-outline-primary me-2"
                        to={`/editProduct/${product._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        href="#"
                        className="btn btn-outline-danger ms-2"
                        onClick={() => deleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

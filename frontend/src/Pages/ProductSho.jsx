import React, { useEffect, useState } from "react";
import image from "../../public/product.jpg";


const ProductSho = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const responce = await fetch("http://localhost:8080/product");
      const data = await responce.json();
      setProducts(data);
    };
    useEffect(() => {
      getProducts();
    }, []);
  return (
    <div>
          <div className="container-fluid container-lg py-4 bg-light rounded-4 my-5 mt-100 text-center">
        <h1 className="fw-bold"> List of Products</h1>

        <div className=" text-end">
          

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
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductSho
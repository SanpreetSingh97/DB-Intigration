import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg w-100 position-sticky top-0 z-2 ">
        <div class="container-fluid container-lg fs-5 bg1 text-dark d-flex justify-content-between align-items-sm-start rounded-bottom-4  ">
          <div className="left ms-lg-4">
            <Link to="/" class="navbar-brand fs-1 fw-bold  text-dark" href="#">
          CR🐱‍🏍UD
          </Link>
         
          </div>
          <div className="right me-lg-4">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ">
              <li class="nav-item mx-4 btn btn-outline-info fw-bold fs-5 px-3 my-2 rounded-2 border-0">
                <Link to="/" class="nav-link active  text-dark" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item mx-4 btn btn-outline-info fw-bold fs-5 px-3 my-2 rounded-2 border-0">
                <Link class="nav-link  text-dark" to="/product">
                  Products
                </Link>
             
              </li>
            

              <li>
                  <Link class="nav-item mx-4 btn btn-outline-info text-dark fw-bold fs-5 px-3 my-2 rounded-2 border-0" to="/contact">
                  Contact Us
                </Link>
                  </li>

              <li class="nav-item mx-4 btn btn-outline-info fw-bold fs-5 px-3 my-2 rounded-2 border-0 dropdown">
                <a
                  class="nav-link dropdown-toggle  text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cruds
                </a>
                <ul class="dropdown-menu">
                  <li>
                  <Link class="nav-link" to="/productEdit">
                  Products
                </Link>
                  </li>
                  <li>
                  <Link class="nav-link" to="/post">
                  Posts
                </Link>
                  </li>
                  <li>
                  <Link class="nav-link" to="/todo">
                  Todo
                </Link>
                  </li>
                
                </ul>
              </li>
              <li>
                  <Link class="nav-item mx-4 btn btn-outline-info text-dark fw-bold fs-5 px-3 my-2 rounded-2 border-0" to="/login">
                  Login
                </Link>
                  </li>
           
            </ul>
            
          </div>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Nav;

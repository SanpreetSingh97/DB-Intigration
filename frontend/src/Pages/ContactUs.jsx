import React, { useState } from "react";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <div className="container-fluid container-lg py-5 bg-light rounded-4 my-5 mt-100 text-center">
        <h1 className="fw-bold">Contact Us</h1>

       
          <section className=" w-100 ">
            <div className=" py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card" style={{ borderRadius: "1rem" }}>
                    <div className="row g-0  overflow-hidden bg-light ">
                      <div className="col-md-6 col-lg-5 d-none d-md-block  overflow-hidden">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                          alt="login form"
                          className="img-fluid"
                          style={{ borderRadius: " 1rem 0 0 1rem" }}
                        />
                      </div>
                      <div className="col-md-6 col-lg-7 bg-light d-flex align-items-center justify-content-center h100">
                        <div className="w-100 h100  text-black">
                         <ContactUsForm/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      </div>
    </>
  );
};

export default ContactUs;

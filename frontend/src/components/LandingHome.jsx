import React from "react";
import LandingImage from "../../public/LandingImage.png";

const LandingHome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="vh-100 d-flex align-items-stretch row-cols-1  row-cols-md-2">
          <div className="left vh-100 w-50 d-flex justify-content-center align-items-center ">
            <div className=" h-75 d-flex align-items-center  w-100 rounded-5 overflow-hidden ">
              <div className=" h-75 w-100">
                {" "}
                <div className="d-flex justify-content-center align-items-center text-end w-100 mb-4">
                  {/* <h1 className=" mainHeading text-end">CRUD</h1> */}
                  <h1 className="mainHeading w-25 text-center ">C</h1>
                  <h1 className="mainHeading w-25 text-center ">R</h1>
                  <h1 className="mainHeading w-25 text-center ">U </h1>
                  <h1 className="mainHeading w-25 text-center ">D</h1>
                </div>
                <div className="d-flex w-100 justify-content-center align-items-center">
                  <h2 className="fw-bold fs-1  w-25 text-center text-success ">
                    Creare
                  </h2>
                  <h2 className="fw-bold fs-1  w-25 text-center  text-primary">
                    Read
                  </h2>
                  <h2 className="fw-bold fs-1  w-25 text-center text-secondary ">
                    Update
                  </h2>
                  <h2 className="fw-bold fs-1  w-25 text-center text-danger ">
                    Delete
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="right h-100 w-50 d-flex justify-content-center align-items-center">
            <div className=" h-75 w-75 rounded-5 overflow-hidden ">
              <img
                src={LandingImage}
                alt=""
                className=" object-fit-cover h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHome;

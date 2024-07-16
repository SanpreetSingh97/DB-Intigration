import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Index = () => {
  return (
    <>
   <div className="body">
   <Nav />
      <Outlet />
      <Footer />
   </div>
    </>
  );
};

export default Index;

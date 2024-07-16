import { RouterProvider } from "react-router-dom";
// Bootstrap cdn

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


import "./App.css";
import routes from "./routers/routes.jsx";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../Page/ProductDetail";

function PrivateRoute({ login }) {
  return login === true ? <ProductDetail /> : <Navigate to="/login" />;
}

export default PrivateRoute;

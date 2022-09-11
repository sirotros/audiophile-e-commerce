import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import BestGear from "../components/BestGear";
function ProductPage() {
  return (
    <div>
      <div className="my-12 ml-96 text-gray">
        <Link to="/">Go Back</Link>
      </div>
      <ProductDetail />
      <BestGear />
    </div>
  );
}

export default ProductPage;

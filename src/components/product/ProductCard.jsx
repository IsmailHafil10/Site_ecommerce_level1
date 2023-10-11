import React from "react";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3">
        <div class="card">
          <div className="card-body">
            <img width="100px" src={product.thumbnail} alt={product.title} />

            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.price} </p>
            <div className="d-flex flex-wrap text-center justify-content-center">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

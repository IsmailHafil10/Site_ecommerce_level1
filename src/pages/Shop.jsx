import React, { useEffect, useState } from "react";
import ProductList from "../components/product/ProductList";
import ProductForm from "../components/product/ProductForm";
import ProductGrid from "../components/product/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { setShowGrid } from "../store/features/product/productSlice";
import { getAllProducts } from "../store/features/product/productActions";
import { FaShoppingCart } from "react-icons/fa";
import { PiNumberSquareNineFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const Shop = () => {
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { showGrid } = useSelector((state) => state.product);
  const { itemCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row">
        <div className="col-11">
          <ProductForm />
        </div>
        <div className="col-1 my-5">
          <Link
            to="/cart"
            type="button"
            className="btn btn-primary position-relative btn-sm "
          >
            <FaShoppingCart />
            <em>Cart</em>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {itemCount}
            </span>
          </Link>
        </div>
      </div>

      <hr />
      <div className="row my-4">
        <div className="col-12">
          <div className="col-md-12">
            <button
              className=" btn btn-dark"
              onClick={() => dispatch(setShowGrid())}
            >
              {showGrid ? "grid" : "list"}
            </button>
          </div>

          {!showGrid && <ProductList />}
          {showGrid && <ProductGrid />}
        </div>
      </div>
    </>
  );
};

export default Shop;

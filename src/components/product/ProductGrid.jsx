import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;

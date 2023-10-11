import React, { useState } from "react";
import {
  persistProduct,
  updateProduct,
  setProduct,
} from "../../store/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  storeProduct,
  putProduct,
} from "../../store/features/product/productActions";

const ProductForm = () => {
  const { product, edit } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    if (edit) {
      dispatch(putProduct(product));
    } else {
      //dispatch({type:"product/persistProduct",payload: product} pour les reducers
      dispatch(storeProduct(product));
    }
  };
  return (
    <>
      <div className="row my-5">
        <div className="col-6 mx-auto">
          <h1 className="my-3">New product</h1>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 mx-auto">
          <form onSubmit={submit}>
            <div className="form-group my-3">
              <label htmlFor="title">Title</label>
              <input
                onChange={({ target: { name, value } }) =>
                  dispatch(
                    setProduct({
                      name,
                      value,
                    })
                  )
                }
                name="title"
                value={product.title}
                type="text"
                id="title"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="price">Price</label>
              <input
                onChange={(e) =>
                  dispatch(
                    setProduct({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
                value={product.price}
                type="number"
                name="price"
                id="price"
                className="form-control"
              />
            </div>
            <div className="d-grid my-3">
              {edit && (
                <button className="btn btn-warning">update product</button>
              )}
              {!edit && (
                <button className="btn btn-success">Add a product</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItemFromCart,
  setDecrement,
  setIncrement,
} from "../store/features/panier/PanierSlice";

const Panier = () => {
  const { items, total, itemCount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <h4>Shopping Cart</h4>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.thumbnail} alt={item.title} width="100px" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} DH</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => dispatch(setDecrement(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => dispatch(setIncrement(item.id))}
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price * item.quantity}DH</td>
                  <td>
                    <button
                      className="btn  btn-danger"
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>

        <div className=" p-3 m-5 bg-success">
          <h4>Cart informations:</h4>
          <hr width="100%" />
          <p>Products: {itemCount}</p>
          <p>TOTAL PRICE: {total} DH</p>
        </div>
      </div>
      <Link to="/shop">
        <h6> Continue Shopping</h6>
      </Link>
    </>
  );
};

export default Panier;

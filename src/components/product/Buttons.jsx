import {
  deleteProduct,
  editProduct,
} from "../../store/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { destroyProduct } from "../../store/features/product/productActions";
import { addItemToCart } from "../../store/features/panier/PanierSlice";
import { FaCartArrowDown } from "react-icons/fa";

const Buttons = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={(e) => dispatch(editProduct(product))}
        className="me-2 btn btn-sm btn-warning"
      >
        edit
      </button>
      <button
        onClick={(e) => dispatch(destroyProduct(product.id))}
        className="btn btn-sm btn-danger"
      >
        delete
      </button>
      <button onClick={(e) => dispatch(addItemToCart(product))} className="btn btn-sm btn-success"><FaCartArrowDown/></button>
    </>
  );
};

export default Buttons;

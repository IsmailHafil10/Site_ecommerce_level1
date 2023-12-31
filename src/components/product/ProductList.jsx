import { useSelector } from "react-redux";
import Buttons from "./Buttons";


const ProductList = () => {



  const { products } = useSelector((state) => state.product);
  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img width="100px" src={product.thumbnail} alt={product.title}/></td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="text-end">
                <Buttons product={product}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;

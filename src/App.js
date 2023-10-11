import Shop from "./pages/Shop";
import "./App.css";
import ProductList from "./components/product/ProductList";
import {  RouterProvider } from "react-router-dom";
import router from "./routing";

function App() {
  return (
    <>
      
        <RouterProvider router={router} />
      
    </>
  );
}

export default App;

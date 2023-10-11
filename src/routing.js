import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import { createBrowserRouter } from "react-router-dom";
import SideLayout from "./layout/SideLayout";
import Login from "./pages/Login";
import { AuthLoader } from "./store/features/User/authActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "shop", element: <Shop />, loader: AuthLoader },
      { path: "cart", element: <Panier /> ,loader: AuthLoader},
      { path: "login", element: <Login /> },
    ],
  },
]);
export default router;

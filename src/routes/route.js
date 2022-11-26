import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../layouts/DashBoardLayOut";
import MainLayout from "../layouts/MainLayout";
import AddProducts from "../pages&components/pages/AddProducts/AddProducts";
import AllProducts from "../pages&components/pages/AllProducts/AllProducts";
import Home from "../pages&components/pages/Home/Home/Home";
import Login from "../pages&components/pages/Login/Login";
import SelectedProducts from "../pages&components/pages/SelectedProducts/SelectedProducts";
import SignUP from "../pages&components/pages/SignUp/SignUP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/:catName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.catName}`),
        element: <SelectedProducts />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUP />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashBoardLayOut />,
    children: [
      {
        path: "/dashboard/addProduct",
        element: <AddProducts />,
      },
    ],
  },
]);

export default router;

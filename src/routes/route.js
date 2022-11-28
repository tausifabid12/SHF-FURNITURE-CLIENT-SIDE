import { createBrowserRouter } from "react-router-dom";
import useUser from "../hooks/useUsers";
import DashBoardLayOut from "../layouts/DashBoardLayOut";
import MainLayout from "../layouts/MainLayout";
import AddProducts from "../pages&components/pages/AddProducts/AddProducts";
import AllProducts from "../pages&components/pages/AllProducts/AllProducts";

import Bookings from "../pages&components/pages/Bookings/Bookings";
import Buyers from "../pages&components/pages/Buyers/Buyers";
import Home from "../pages&components/pages/Home/Home/Home";
import Login from "../pages&components/pages/Login/Login";
import ProductDetails from "../pages&components/pages/ProductDetails/ProductDetails";
import SelectedProducts from "../pages&components/pages/SelectedProducts/SelectedProducts";
import Sellers from "../pages&components/pages/Sellers/Sellers";
import SignUP from "../pages&components/pages/SignUp/SignUP";
import AdminRoute from "./AdminRoute/AdminRoute ";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
        loader: () => fetch(`http://localhost:5000/products`),
        element: <AllProducts />,
      },
      {
        path: "/products/:catName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.catName}`),
        element: (
          <PrivateRoute>
            <SelectedProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/item/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/item/${params.id}`),
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
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
      // {
      //   path: "/dashboard",
      //   element:,
      // },
      {
        path: "/dashboard/bookings",
        element: <Bookings />,
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: (
          <AdminRoute>
            <Buyers></Buyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdminRoute>
            <Sellers />
          </AdminRoute>
        ),
      },
      // {
      //   path: "/dashboard/allUsers",
      //   element: (
      //     <AdminRoute>
      //       <AllUsers />
      //     </AdminRoute>
      //   ),
      // },
    ],
  },
]);

export default router;

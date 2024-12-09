import { Routes, Route } from "react-router-dom";
import {
  PageHome,
  ProductsList,
  ProductDetailsPage,
  Login,
  Resgister,
  CartPage,
  OrderPage,
  DashboardPage,
  PageNotFound,
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetailsPage />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Resgister />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

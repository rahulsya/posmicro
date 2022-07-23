import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Dashboard,
  Profile,
  Login,
  Shipment,
  DetailOrderHistory,
  OrderHistory,
  Register,
  ResetPassword,
  RequestResetPassword,
} from "./pages";
import { GuardRoute } from "./components";
import { ToastContainer } from "react-toastify";

// redux anjay
import { Provider } from "react-redux";
import { listen } from "./redux/listener";
import store from "./redux/store";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <GuardRoute>
              <Home />
            </GuardRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={
            <GuardRoute>
              <Products />
            </GuardRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <GuardRoute>
              <Dashboard />
            </GuardRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <GuardRoute>
              <Profile />
            </GuardRoute>
          }
        />
        <Route
          path="/shipment"
          element={
            <GuardRoute>
              <Shipment />
            </GuardRoute>
          }
        />
        <Route
          path="/order-history"
          element={
            <GuardRoute>
              <OrderHistory />
            </GuardRoute>
          }
        />
        <Route
          path="/detail-order/:id"
          element={
            <GuardRoute>
              <DetailOrderHistory />
            </GuardRoute>
          }
        />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/request-reset-password"
          element={<RequestResetPassword />}
        />
      </Routes>
      <ToastContainer />
    </Provider>
  );
}

export default App;

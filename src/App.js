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
} from "./pages";
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
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/detail-order" element={<DetailOrderHistory />} />
      </Routes>
      <ToastContainer />
    </Provider>
  );
}

export default App;

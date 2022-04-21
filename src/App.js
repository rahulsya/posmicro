import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Dashboard, Profile, Login } from "./pages";

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
      </Routes>
    </Provider>
  );
}

export default App;

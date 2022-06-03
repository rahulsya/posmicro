import React from "react";
import {
  HomeIC,
  LogoutIC,
  DashboardIC,
  ProductIC,
  ProfileIC,
  OrderIC,
} from "../../assets/icons";
import { NavLink, useNavigate } from "react-router-dom";
import user from "../../api/users";
import AlertToast from "../../utils/toast";
import { useSelector } from "react-redux";

function Navbar() {
  const auth = useSelector((state) => state.auth);

  const active = ({ isActive }) =>
    isActive
      ? "pt-2 text-blue-500 font-semibold underline underline-offset-4"
      : "pt-2 ";

  const Menus = [
    {
      name: "Home",
      icon: <HomeIC />,
      link: "/",
      isUser: true,
    },
    {
      name: "Products",
      icon: <ProductIC />,
      link: "/products",
      isUser: false,
    },
    {
      name: "Orders",
      icon: <OrderIC />,
      link: "/order-history",
      isUser: true,
    },
    {
      name: "Dashboard",
      icon: <DashboardIC />,
      link: "/dashboard",
      isUser: false,
    },
    {
      name: "Profile",
      icon: <ProfileIC />,
      link: "/profile",
      isUser: true,
    },
  ];

  const navigate = useNavigate();

  const onLogout = () => {
    user
      .logout()
      .then((response) => {
        AlertToast("success", response.message);
        localStorage.removeItem("tokens");
        navigate("/login");
      })
      .catch((err) => {
        AlertToast(err.message);
      });
  };

  return (
    <>
      <div className="text-gray-400 px-3 lg:px-6 py-12 bg-white flex flex-col justify-between items-center shadow-xl">
        <div>
          {auth.role === "customer" && (
            <>
              {Menus.filter(({ isUser }) => isUser === true).map(
                (menu, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer flex flex-col items-center mb-8"
                    >
                      {menu.icon}
                      <NavLink to={menu.link} className={active}>
                        {menu.name}
                      </NavLink>
                    </div>
                  );
                }
              )}
            </>
          )}
          {auth.role === "admin" && (
            <>
              {Menus.map((menu, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer flex flex-col items-center mb-8"
                  >
                    {menu.icon}
                    <NavLink to={menu.link} className={active}>
                      {menu.name}
                    </NavLink>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="flex flex-col items-center mb-5">
          <LogoutIC />
          <button onClick={() => onLogout()} className="pt-2">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

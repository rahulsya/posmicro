import React, { useState } from "react";
import { HomeIC, LogoutIC, DashboardIC } from "../../assets/icons";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const active = ({ isActive }) =>
    isActive
      ? "pt-2 text-blue-500 font-semibold underline underline-offset-4"
      : "pt-2 font-semibold";

  const Menus = [
    {
      name: "Home",
      icon: <HomeIC />,
      link: "/",
    },
    {
      name: "Products",
      icon: <HomeIC />,
      link: "/products",
    },
    {
      name: "Dashboard",
      icon: <DashboardIC />,
      link: "/dashboard",
    },
  ];

  return (
    <>
      <div className="text-gray-400 px-6 py-12 bg-white flex flex-col justify-between items-center shadow-xl">
        <div>
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
        </div>
        <div className="flex flex-col items-center mb-5">
          <LogoutIC />
          <Link to="logout" className="pt-2">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

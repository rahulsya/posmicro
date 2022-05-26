import React from "react";
import dateFormat from "dateformat";

function Header({ title, children }) {
  return (
    <>
      <div className="flex flex-col font-bold text-3xl">
        <div className="text-gray-700 pb-2">{title}</div>
        <div className="text-gray-600 text-sm font-normal pb-5">
          {dateFormat(new Date(), "fullDate")}
        </div>
        <hr />
      </div>
      {children}
    </>
  );
}

export default Header;

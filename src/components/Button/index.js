import React from "react";

function Button({ title, type }) {
  if (type === "success") {
    return (
      <button className="w-full mt-5 px-4 py-5 rounded-md text-center bg-green-500 shadow-lg text-white font-semibold mr-3">
        {title}
      </button>
    );
  }
  return (
    <button className="px-4 py-2 rounded-md text-center bg-blue-500 shadow-lg text-white font-semibold mr-3">
      {title}
    </button>
  );
}

export default Button;

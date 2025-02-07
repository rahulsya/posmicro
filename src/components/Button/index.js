import React from "react";

function Button({ title, type, bg, color, onPress, disabled = false }) {
  if (type === "btn-completed") {
    return (
      <button
        onClick={onPress}
        className="rounded-2xl bg-green-800 text-green-200 py-1 px-4"
      >
        {title}
      </button>
    );
  }
  if (type === "btn-pending") {
    return (
      <button
        onClick={onPress}
        className="rounded-2xl bg-yellow-800 text-yellow-200 py-1 px-4"
      >
        {title}
      </button>
    );
  }
  if (type === "btn-cancel") {
  }
  if (type === "success") {
    return (
      <button
        data-testid="button-test"
        onClick={onPress}
        className="hover:bg-green-500 w-full mt-5 px-4 py-5 rounded-md text-center bg-green-500 shadow-lg text-white font-semibold mr-3"
      >
        {title}
      </button>
    );
  }
  if (type === "btn-wfull") {
    return (
      <button
        onClick={onPress}
        className={`w-full px-4 py-3 rounded-md text-center ${
          bg ? bg : "bg-blue-500"
        } text-white font-semibold mr-3 hover:shadow-xl`}
      >
        {title}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      onClick={onPress}
      className={`px-4 py-2 rounded-md text-center ${
        bg ? bg : "bg-blue-500"
      } text-white font-semibold mr-3 hover:shadow-xl`}
    >
      {title}
    </button>
  );
}

export default Button;

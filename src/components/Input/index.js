import React from "react";

function InputText({ title, name, placeholder, type, value, onChange }) {
  if (type === "file") {
    return (
      <div className="mb-3">
        <label className="font-semibold text-gray-800" htmlFor={name}>
          {title}ss
        </label>
        <input
          id={name}
          type="file"
          name={name}
          title={title}
          // onChange
          onChange={onChange}
          value={value}
          // defaultValue={value}
          placeholder={placeholder}
          className="w-full py-3 px-4 rounded-md border-2 border-gray-300"
        />
      </div>
    );
  }

  return (
    <>
      <div className="mb-3">
        <label className="font-semibold text-gray-800" htmlFor={name}>
          {title}
        </label>
        <input
          id={name}
          type={type ? type : "text"}
          name={name}
          title={title}
          onChange={onChange}
          value={value}
          // defaultValue={value}
          placeholder={placeholder}
          className="w-full py-3 px-4 rounded-md"
        />
      </div>
    </>
  );
}

export default InputText;

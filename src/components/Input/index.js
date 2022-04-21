import React from "react";

function InputText(
  { title, name, placeholder, type, value, onChange, errors },
  ref
) {
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
          ref={ref}
          // defaultValue={value}
          placeholder={placeholder}
          className="w-full py-3 px-4 rounded-md border-2 border-gray-300 border-[1px] "
        />
        {errors && (
          <div className="text-xs text-red-500 font-bold">
            {name} is Required
          </div>
        )}
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
          ref={ref}
          // defaultValue={value}
          placeholder={placeholder}
          className="w-full py-3 px-4 rounded-md p-3 border-[1px] "
        />
        {errors && (
          <div className="text-xs text-red-500 font-bold">
            {name} is Required
          </div>
        )}
      </div>
    </>
  );
}

export default React.forwardRef(InputText);

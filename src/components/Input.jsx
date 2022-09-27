import React from "react";

function Input({
  name,
  label,
  error,
  placeholder,
  onChange = () => null,
  full,
  className,
  value,
}) {
  let classNames = `flex flex-col ${
    full ? "lg:w-[710px] sm:w-[320px] ml-9" : "w-80 "
  } ${error ? "text-red" : ""} ${className}`;
  return (
    <div className={classNames}>
      <div className="flex justify-between items-center">
        <label htmlFor={name} className="my-2">
          {label}
        </label>
        {error && <span> {error} </span>}
      </div>
      <input
        placeholder={placeholder}
        id={name}
        name={name}
        className={
          error
            ? "border-[1px] border-red rounded-md focus:outline-none focus:outline-1 focus:outline-orange focus:border-0 h-12 indent-2.5"
            : "border-[1px] border-gray rounded-md focus:outline-none focus:outline-1 focus:outline-orange focus:border-0 h-12 indent-2.5"
        }
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;

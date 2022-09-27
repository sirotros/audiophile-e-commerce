import React from "react";

function Button({
  type = "submit",
  outline,
  orange,
  dark,
  sm,
  hidden,
  className,
  children,
  disabled,
  full,
  onClick = () => null,
}) {
  const classNames = `cursor-pointer mt-5 h-11 p-1 text-dark font-bold flex items-center justify-center ${
    className ? className : ""
  } ${outline ? "border-[1px] border-dark" : ""} ${
    orange ? "bg-orange hover:bg-orangeLight text-white" : ""
  } 
  ${dark ? "bg-dark hover:bg-darkLight text-white" : ""}
  ${hidden ? "opacity-0 " : ""}
  ${full ? "w-full py-6" : "w-40"}
  ${sm ? "w-10 h-10 " : ""}
  ${disabled ? "opacity-40 hover:cursor-not-allowed" : ""}
  `;
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

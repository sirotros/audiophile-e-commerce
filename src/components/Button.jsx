import React from "react";

function Button({
  type = "button",
  outline,
  orange,
  dark,
  sm,
  gray,
  className,
  children,
}) {
  const classNames = `cursor-pointer mt-5 w-40 h-9 p-1 text-dark text-white font-bold flex items-center justify-center  ${className} ${
    outline ? "border-dark border-[1px] text-dark" : ""
  } ${orange ? "bg-orange hover:bg-orangeLight" : ""} 
  ${dark ? "bg-dark hover:bg-darkLight text-white" : ""}
  ${sm ? "w-10 h-10 " : ""}
  `;
  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}

export default Button;

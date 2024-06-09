import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    blue_gray_700: "bg-blue_gray-700",
    blue_gray_700_01: "bg-blue_gray-700_01 text-white-A700",
  },
};
const sizes = { xs: "p-[15px]", sm: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_gray_700", "blue_gray_700_01"]),
};

export { Button };

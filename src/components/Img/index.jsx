import React from "react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  style,
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={style}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };

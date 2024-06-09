import React from "react";

const sizeClasses = {
  txtDMSerifDisplayRegular50: "font-dmserifdisplay font-normal",
  txtDMSerifDisplayRegular24Gray800: "font-dmserifdisplay font-normal",
  txtDMSerifDisplayRegular30: "font-dmserifdisplay font-normal",
  txtAbelRegular24WhiteA700: "font-abel font-normal",
  txtDMSerifDisplayRegular32: "font-dmserifdisplay font-normal",
  txtIstokWebBold36: "font-bold font-istokweb",
  txtAbelRegular35Black900: "font-abel font-normal",
  txtIstokWebBold36Bluegray50063: "font-bold font-istokweb",
  txtAbelRegular35Bluegray70001: "font-abel font-normal",
  txtOpenSans14WhiteA700: "font-normal font-opensans",
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtDMSerifDisplayRegular32Gray90001: "font-dmserifdisplay font-normal",
  txtDMSerifDisplayRegular24: "font-dmserifdisplay font-normal",
  txtAbelRegular35: "font-abel font-normal",
  txtAbelRegular14: "font-abel font-normal",
  txtOpenSans14: "font-normal font-opensans",
  txtIstokWebRegular24: "font-istokweb font-normal",
  txtMartelBold16: "font-bold font-martel",
  txtIstokWebBold24: "font-bold font-istokweb",
  txtOpenSansBold14Gray600: "font-bold font-opensans",
  txtOpenSansBold14: "font-bold font-opensans",
  txtEricaOneRegular35: "font-ericaone font-normal",
  txtAbelRegular28: "font-abel font-normal",
  txtAbelRegular35Deeporange500: "font-abel font-normal",
  txtAbelRegular28Bluegray70001: "font-abel font-normal",
  txtDMSerifDisplayRegular35: "font-dmserifdisplay font-normal",
  txtAbelRegular20: "font-abel font-normal",
  txtAbelRegular23: "font-abel font-normal",
  txtAbelRegular24: "font-abel font-normal",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtInterRegular18: "font-inter font-normal",
  txtAbelRegular35WhiteA70001: "font-abel font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

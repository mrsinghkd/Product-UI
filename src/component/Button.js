import React from "react";

const Button = ({ children = "Explore", className = "", style = {}, ...rest }) => {
  const baseStyle = {
    width: "180px",
    height: "60px",
    background: "#6BA539",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: 600,
    borderRadius: "12px",
    border: "1px solid #8BC34A",
    boxShadow: "0 0 20px rgba(107,165,57,0.35)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button className={className} style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </button>
  );
};

export default Button;


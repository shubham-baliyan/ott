import React from "react";
import error from "../../assets/images/error.webp";

const Error = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img height="600" width="900" src={error} alt="loading Icon" />
    </div>
  );
};

export default Error;

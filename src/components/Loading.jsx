import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "100px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="spinner-border text-light"
        style={{ height: "2rem", width: "2rem" }}
        role="status"
      ></div>
    </div>
  );
};

export default Loading;

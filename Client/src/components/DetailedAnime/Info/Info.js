import React from "react";

import "./Info.css";
const Info = ({ valueName, value }) => {
  return (
    <div className="info">
      <h5>{valueName}</h5>
      <h4>{value}</h4>
    </div>
  );
};

export default Info;

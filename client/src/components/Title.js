import React from "react";

const Title = ({ title, additionalClass }) => {
  return <h1 className={`text-4xl text-center ${additionalClass}`}>{title}</h1>;
};

export default Title;

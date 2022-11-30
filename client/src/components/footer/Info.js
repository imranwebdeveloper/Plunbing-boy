import React from "react";

const Info = ({ title, info, subInfo, subTitle, children }) => {
  return (
    <div className="px-2">
      <h2 className="text-cyan-600  mb-3 uppercase">{title}</h2>
      <p>{info}</p>
      <div className="mt-8">
        <h2 className="text-cyan-600  mb-3 uppercase">{subTitle}</h2>
        <p>{subInfo}</p>
      </div>
    </div>
  );
};

export default Info;

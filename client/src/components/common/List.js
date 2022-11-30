import React from "react";
import { BsCheck2Square } from "react-icons/bs";

const List = ({ title }) => {
  return (
    <li className="flex gap-3 py-3">
      <span className="text-2xl text-cyan-700">
        <BsCheck2Square />
      </span>
      <p className="text-lg">{title}</p>
    </li>
  );
};

export default List;

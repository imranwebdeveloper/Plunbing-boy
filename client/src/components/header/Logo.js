import React from "react";
import { Link } from "react-router-dom";
import img from "../../assert/icon.png";

const Logo = () => {
  return (
    <div className="flex-1 flex items-center gap-2">
      <div className="w-8 h-8">
        <img src={img} alt="img" className="w-full" />
      </div>
      <Link to="/" className="text-2xl font-bold">
        PlumBoy
      </Link>
    </div>
  );
};

export default Logo;

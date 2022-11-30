import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const AuthLink = () => {
  const { user, setUser } = useContext(AuthContext);

  const logoutHandler = () => {
    localStorage.removeItem("plumboy-token");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button to="/login" className="font-bold px-2 " onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="font-bold px-2 ">
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthLink;

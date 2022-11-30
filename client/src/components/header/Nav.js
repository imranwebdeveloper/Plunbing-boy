import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

export const Nav = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="hidden md:flex flex-1 justify-end gap-2 ">
      <NavLink to="/" className="px-2 py-1 font-bold hover:text-indigo-800">
        Home
      </NavLink>

      <NavLink to="/blog" className="px-2 py-1 font-bold hover:text-indigo-800">
        Blog
      </NavLink>
      {user ? (
        <>
          <NavLink
            to="/my-reviews"
            className="px-2 py-1 font-bold hover:text-indigo-800"
          >
            My Reviews
          </NavLink>
          <NavLink
            to="/add-service"
            className="px-2 py-1 font-bold hover:text-indigo-800"
          >
            Add Service
          </NavLink>
        </>
      ) : null}
    </nav>
  );
};

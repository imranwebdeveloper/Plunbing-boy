import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import { AuthContext } from "../context/AuthContextProvider";
import useTitle from "../hook/useTitle";
const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");

  const { loginHandler, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    fetch("https://plumboy-imranwebdeveloper.vercel.app/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.status) {
          setError(result.massage);
        } else {
          setUser(result.user);
          localStorage.setItem("plumboy-token", result.token);
          navigate(from, { replace: true });
        }
      })
      .catch((err) => console.dir(err));
  };
  const googleLoginHandler = () => {
    loginHandler()
      .then((result) => {
        const { email } = result.user;
        fetch("https://plumboy-imranwebdeveloper.vercel.app/user/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (!result.status) {
              console.log(result.massage);
            } else {
              setUser(result.user);
              localStorage.setItem("plumboy-token", result.token);
              navigate(from, { replace: true });
            }
          })
          .catch((err) => console.dir(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container CS="min-h-screen">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-10">
        <div className="relative bg-gray-100   flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border">
          <div className="rounded-t mb-0 px-6 py-4">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm mt-2 font-bold">
                Sing in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white  active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={googleLoginHandler}
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={submitHandler}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  required
                />
              </div>
              {error && <small className="text-red-600">{error}</small>}
              <div className="text-center mt-6">
                <button
                  className=" bg-white border   active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="relative pb-6 mt-2">
          <p className="text-center">
            Don't Have an Account?{" "}
            <Link to="/register" className="text-blue-600 mr-1">
              Register
            </Link>
            here.
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default Login;

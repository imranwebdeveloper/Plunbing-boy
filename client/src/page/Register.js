import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import { AuthContext } from "../context/AuthContextProvider";
import useTitle from "../hook/useTitle";

const Register = () => {
  useTitle("Registration");
  const navigate = useNavigate();
  const { setUser, loginHandler } = useContext(AuthContext);

  const googleRegisterHandler = () => {
    loginHandler()
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        fetch("https://plumboy-server-three.vercel.app/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ displayName, photoURL, email, password: "" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.status) {
              console.log(data.massage);
            } else {
              localStorage.setItem("plumboy-token", data.token);
              setUser(data.user);
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const displayName = e.target.fullName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { displayName, photoURL, email, password };

    fetch("https://plumboy-server-three.vercel.app/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("plumboy-token", data.token);
        setUser(data.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container CS="min-h-screen">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative bg-gray-100  mb-6 shadow-lg rounded-lg  border">
          <div className="rounded-t mb-0 px-6 py-4">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Register in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={googleRegisterHandler}
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
          <div className="flex-auto px-4 lg:px-10 py-4 pt-0">
            <form onSubmit={registerHandler}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Photo URL"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  name="email"
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
                  className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className=" bg-white border  active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="relative pb-6 mt-2">
          <p className="text-center">
            Have an Account?
            <Link to="/login" className="text-blue-600 mx-1">
              Login
            </Link>
            here.
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default Register;

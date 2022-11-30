import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const AddReview = ({ id, service }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    const review = {
      service,
      serviceId: id,
      user: user.email,
      userName: user.displayName,
      userImg: user.photoURL,
      rating: e.target.rating.value,
      comment: e.target.comment.value,
    };
    fetch("https://plumboy-server-three.vercel.app/services/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your review added");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {!user ? (
        <h1 className="text-2xl text-center">
          Please
          <Link
            to="/login"
            className="text-2xl text-blue-700 inline px-1"
            state={{ from: location }}
            replace
          >
            Login
          </Link>
          to add a review
        </h1>
      ) : (
        <form
          className="bg-white p-6 shadow rounded-md"
          onSubmit={submitHandler}
        >
          <p className="mb-1">Add Your Reviews</p>
          <div className="relative w-full mb-3">
            <textarea
              type="text"
              name="comment"
              className="border-0 px-3 py-3 h-40 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Comment"
              required
            />
          </div>
          <div className="relative w-full mb-3">
            <input
              type="text"
              name="rating"
              className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Rating"
              required
            />
          </div>
          <div className="text-center mt-6">
            <button
              className=" bg-white border w-40 dark:text-gray-400 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddReview;

import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ReviewsContext } from "../../context/ReviewsContextProvider";

export const Modal = ({ onConfirm, review }) => {
  const { reviewUpdateHandler } = useContext(ReviewsContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const rating = e.target.rating.value;
    reviewUpdateHandler({ id: review._id, comment, rating });
    onConfirm(false);
  };

  return (
    <div className="relative  min-h-screen  flex justify-center items-center">
      <div
        id="menu"
        className="w-full h-full bg-gray-900 bg-opacity-80 inset-0 fixed  flex justify-center items-center"
      >
        <div className="max-w-[600px] w-full   relative  bg-white rounded  ">
          <form className=" p-6 shadow rounded-md" onSubmit={submitHandler}>
            <div className="py-4 flex justify-between">
              <p className="text-xl">Edit Your Reviews</p>
              <button
                type="button"
                className="text-xl "
                onClick={() => onConfirm(false)}
              >
                <GrClose />
              </button>
            </div>
            <div className="relative w-full mb-3">
              <textarea
                type="text"
                name="comment"
                defaultValue={review.comment}
                className="border-0 px-3 py-3 h-40 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Comment"
                required
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                name="rating"
                defaultValue={review.rating}
                className="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Rating"
                required
              />
            </div>
            <div className="text-center mt-6">
              <button
                className=" bg-white border w-40  active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

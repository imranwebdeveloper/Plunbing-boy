import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const ReviewsContext = createContext(null);
const ReviewsContextProvider = ({ children }) => {
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [refresh, setRefresh] = useState(false);

  const reviewsDeleteHandler = (reviewId) => {
    fetch("https://plumboy.vercel.app/user/reviews?id=" + reviewId, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserReviews(userReviews.filter((review) => review._id !== reviewId));
        toast.error("Reviews deleted");
      })
      .catch((err) => console.log(err));
  };

  const reviewUpdateHandler = ({ id, comment, rating }) => {
    fetch(`https://plumboy.vercel.app/user/reviews?id=${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ comment, rating }),
    })
      .then((res) => res.json())
      .then((data) => toast.success("updated"))
      .catch((err) => console.log(err));
  };
  const reviewsValue = {
    userReviews,
    setUserReviews,
    reviewsDeleteHandler,
    reviewUpdateHandler,
    loading,
    setLoading,
  };
  return (
    <ReviewsContext.Provider value={reviewsValue}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContextProvider;

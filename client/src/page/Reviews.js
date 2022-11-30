import React, { useContext, useEffect } from "react";
import Container from "../components/common/Container";
import Loading from "../components/common/Loading";
import UserReviewsCard from "../components/common/UserReviewsCard";
import { ReviewsContext } from "../context/ReviewsContextProvider";
import useTitle from "../hook/useTitle";

const Reviews = () => {
  useTitle("User Reviews");
  const { userReviews, setUserReviews, loading, setLoading } =
    useContext(ReviewsContext);

  const token = localStorage.getItem("plumboy-token");
  useEffect(() => {
    setLoading(true);
    fetch("https://plumboy.vercel.app/user/reviews", {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserReviews(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [token, setUserReviews, setLoading]);

  return (
    <Container CS="min-h-screen py-12 flex flex-col gap-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          {userReviews.map((review) => (
            <UserReviewsCard key={review._id} review={review} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Reviews;

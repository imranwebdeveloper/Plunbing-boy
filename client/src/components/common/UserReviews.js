const UserReviews = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => {
        return (
          <section
            key={review._id}
            className="bg-blueGray-100 rounded-t-10xl  max-w-[700px] w-full mx-auto mb-2"
          >
            <div className="p-4 shadow  rounded  bg-white bg-opacity-40">
              <div className="flex justify-between gap-2 ">
                <div className="flex gap-2 items-center">
                  <img
                    className=" w-10 h-10 rounded-full"
                    src={review.userImg}
                    alt=""
                  />
                  <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                    {review.userName}
                  </h4>
                </div>
                <span className="mr-4 text-xl font-heading font-medium">
                  {review.rating}
                </span>
              </div>
            </div>
            <div className="bg-white p-4">
              <p className="py-2 max-w-2xl text-darkBlueGray-400 leading-loose">
                {review.comment}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default UserReviews;

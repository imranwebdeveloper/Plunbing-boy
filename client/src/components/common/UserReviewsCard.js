import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import { ReviewsContext } from "../../context/ReviewsContextProvider";
import { Modal } from "./Modal";

const UserReviewsCard = ({ review }) => {
  const { reviewsDeleteHandler } = useContext(ReviewsContext);

  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-[700px] w-full mx-auto flex gap-4 hover:bg-green-50 items-center justify-between shadow-md p-4">
      <div>
        <h3 className="font-bold">{review.service}</h3>
        <p className="text-sm py-2">{review.comment}</p>
        <p className="text-sm">Rating : {review.rating}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="text-2xl p-2 rounded-full hover:bg-yellow-100"
          title="Edit"
          onClick={() => setModal(!modal)}
        >
          <FaEdit />
        </button>
        <button
          title="Delete"
          type="button"
          className="text-2xl p-2 rounded-full hover:bg-red-100"
          onClick={() => reviewsDeleteHandler(review._id)}
        >
          <MdDelete />
        </button>
      </div>
      {modal && <Modal onConfirm={setModal} review={review} />}
    </div>
  );
};

export default UserReviewsCard;

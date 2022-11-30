import Container from "../components/common/Container";
import UserReviews from "../components/common/UserReviews";
import useTitle from "../hook/useTitle";
import { useLoaderData } from "react-router-dom";
import AddReview from "../components/section/AddReview";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Details = () => {
  useTitle("Service Details");
  const { reviews, service } = useLoaderData();
  return (
    <>
      <Container CS="py-16">
        <div className="border rounded md:flex justify-between gap-4 p-4">
          <div className="flex-1">
            <PhotoProvider photoClassName="w-[800px]">
              <PhotoView src={service.imgUrl}>
                <img
                  src={service.imgUrl}
                  alt="img"
                  className="w-full rounded  cursor-pointer"
                />
              </PhotoView>
            </PhotoProvider>
          </div>

          <div className="flex-1 flex flex-col">
            <h1 className="text-5xl text-cyan-700 font-bold">
              {service.title}
            </h1>
            <p className="flex-1 py-4">{service.description}</p>
            <div>
              <p className="font-bold">Rating : {service.rating}</p>
              <p className="text-orange-500 font-bold text-xl">
                Price : $ {service.price}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className=" bg-[#EAEFF6] py-16 ">
        <Container>
          <h1 className="mb-4 text-center text-3xl">Reviews</h1>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              {reviews.length === 0 ? (
                <h1 className="text-center text-2xl">No Reviews Added</h1>
              ) : (
                <UserReviews reviews={reviews} />
              )}
            </div>
            <div>
              <AddReview id={service._id} service={service.title} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Details;

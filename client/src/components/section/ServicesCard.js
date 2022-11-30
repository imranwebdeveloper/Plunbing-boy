import { useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesCard = ({ service }) => {
  const navigate = useNavigate();
  const detailsHandler = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <article className=" lg:flex gap-4 shadow items-center p-2 cursor-pointer hover:shadow-md rounded">
      <div className="lg:w-3/4 w-full ">
        <PhotoProvider>
          <PhotoView src={service.imgUrl}>
            <img src={service.imgUrl} alt="img" className="w-full h-full" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className=" p-2 ">
        <h3 className="text-lg font-bold text-cyan-700">{service.title}</h3>
        <p className="py-2">{service.description.slice(0, 100)} ...</p>

        <main className="lg:flex justify-between items-center">
          <div>
            <strong>Price: $ {service.price}</strong>
            <p>{service.rating}</p>
          </div>
          <button
            className="bg-cyan-700 px-8 py-1 rounded text-white mt-4 lg:mt-0"
            onClick={() => detailsHandler(service._id)}
          >
            View Details
          </button>
        </main>
      </div>
    </article>
  );
};

export default ServicesCard;

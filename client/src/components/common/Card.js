import React from "react";
import { useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Card = ({ service }) => {
  const navigate = useNavigate();
  const detailsHandler = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <article className="mt-20 shadow cursor-pointer hover:shadow-lg rounded">
      <PhotoProvider>
        <PhotoView src={service.imgUrl}>
          <img
            src={service.imgUrl}
            alt="img"
            className="w-full h-40 rounded-t"
          />
        </PhotoView>
      </PhotoProvider>
      <main className="px-3 ">
        <h3 className="text-xl font-bold pt-3 ">{service.title}</h3>
        <p className="py-3">{service.description.slice(0, 100)} ...</p>
      </main>
      <footer className="flex justify-between px-3 pb-3">
        <strong> Price : $ {service.price}</strong>
        <p>{service.rating}</p>
      </footer>
      <div className="px-8">
        <button
          onClick={() => detailsHandler(service._id)}
          className="w-full bg-blue-600 py-2 rounded text-white"
        >
          Details
        </button>
      </div>
    </article>
  );
};

export default Card;

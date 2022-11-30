import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/ServicesContextProvider";
import Card from "../common/Card";
import Container from "../common/Container";
import Loading from "../common/Loading";

const OurService = () => {
  const { services, loading } = useContext(ServiceContext);

  return (
    <Container CS="py-20">
      <h1 className="text-center lg:text-5xl text-3xl font-bold text-cyan-700">
        Our Services
      </h1>
      <p className="text-center max-w-[700px] text-lg mx-auto mt-12">
        Plum-boy, is dedicated to providing the best possible solution for your
        home or business. You can count on us to provide you with a system and
        solution that fits your unique needs and since we've installed many
        systems in this area.
      </p>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={service._id} service={service} />
            ))}
          </div>
          <div className="py-4 flex justify-center mt-8">
            <Link
              to="/services"
              className=" bg-cyan-700 px-12 py-2  text-white font-bold rounded-md"
            >
              See All
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default OurService;

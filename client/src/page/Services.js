import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import Loading from "../components/common/Loading";
import ServicesCard from "../components/section/ServicesCard";
import useTitle from "../hook/useTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("All Service");

  useEffect(() => {
    setLoading(true);
    fetch("https://plumboy-server-three.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container CS="min-h-screen py-20">
      <h1 className="text-2xl uppercase text-cyan-700 font-bold mb-8">
        All Services
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 ">
          {services.map((service) => {
            return <ServicesCard key={service._id} service={service} />;
          })}
        </div>
      )}
    </Container>
  );
};

export default Services;

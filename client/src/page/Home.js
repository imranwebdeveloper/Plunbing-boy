import React, { useContext, useEffect } from "react";
import About from "../components/section/About";
import Banner from "../components/section/Banner";
import More from "../components/section/More";
import OurService from "../components/section/OurService";
import { ServiceContext } from "../context/ServicesContextProvider";
import useTitle from "../hook/useTitle";

const Home = () => {
  const { setServices, setLoading } = useContext(ServiceContext);

  useTitle("Home");

  useEffect(() => {
    fetch("https://plumboy-server-three.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setServices, setLoading]);
  return (
    <>
      <Banner />
      <OurService />
      <About />
      <More />
    </>
  );
};

export default Home;

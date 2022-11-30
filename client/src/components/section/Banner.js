import React from "react";
import Container from "../common/Container";

const Banner = () => {
  return (
    <div className="banner flex ">
      <Container CS=" md:flex  ">
        <div className="flex-1 py-16 max-w-[700px]">
          <h3 className="text-lg font-bold text-cyan-700 ">Guaranteed</h3>
          <h1 className="lg:text-6xl text-3xl font-bold py-8">
            Professional Plumbing Service for Your Home
          </h1>
          <p className="font-bold">
            We’ve made it our mission to provide expert, fairly priced services
            to homeowners throughout the South Suburban area. Reputation is
            everything to our family-owned business, so you can count on us to
            keep our promises and provide the exceptional service you deserve.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

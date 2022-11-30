import React from "react";
import Container from "../common/Container";
import img from "../../assert/about2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-zinc-50">
      <Container CS="py-20 lg:flex gap-4">
        <div className="flex-1 ">
          <img src={img} alt="img" className="w-full rounded-lg" />
        </div>
        <div className="flex-1 mt-4 p-2">
          <h2 className="text-lg text-cyan-700 font-bold uppercase mb-4">
            About
          </h2>
          <h1 className="lg:text-5xl text-3xl font-bold py-6">
            Fast & Reliable Plumbing Service
          </h1>
          <p className="text-lg mb-8">
            Reliable Plumbing & Sewer Service has been providing quality
            plumbing services to the Tinley Park, IL area since 2000. We bring
            over 22 years of experience to every job. Our local, family-owned
            business will beat written quotes. We also offer a full one-year
            guarantee that our repairs will be free of defects in workmanship
            and materials.
          </p>
          <div className="border">
            <Link
              to="/services"
              className="px-16 py-3 font-bold bg-cyan-700 text-white rounded-md "
            >
              Visit Services
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

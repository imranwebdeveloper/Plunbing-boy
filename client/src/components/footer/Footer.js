import React from "react";
import Container from "../common/Container";
import Logo from "../header/Logo";
import Info from "./Info";

const Footer = () => {
  return (
    <footer className="bg-[#1c292f] ">
      <Container CS="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-white py-16">
        <div>
          <Logo />
        </div>
        <Info
          title="New York"
          info="Paradise Road 70, Office 99, Pacific Bay, New York City 10010"
          subTitle="New jersey"
          subInfo="Malioboro Road 70, Xurang 99, National Park, New Jersey 08701"
        ></Info>
        <Info
          title="Get in touch"
          info="Email Us : emrannazir0202@gmail.com"
          subTitle="Take To Us"
          subInfo="+123 456 789 | +987 654 321"
        ></Info>
        <Info title="Help" info="Visit Help Center" subTitle="Follow us"></Info>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import Accordion from "../common/Accordion";
import Container from "../common/Container";
import List from "../common/List";

const More = () => {
  return (
    <Container CS="py-20 md:flex">
      <div className="flex-1">
        <h2 className="text-lg text-cyan-700 font-bold uppercase mb-4">
          Features
        </h2>
        <ul className="mt-2">
          <List title="24 Hours Emergency Service" />
          <List title="Free Estimates" />
          <List title="15 Years Experience" />
          <List title="60 Days Services Warranty" />
          <List title="Top Rated Service" />
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-lg text-cyan-700 font-bold uppercase mb-4">FQA</h2>
        <Accordion title="Why Choose Us?">
          <ul className="list-disc ml-4">
            <li className="text-align-left">State-of-the-art technology</li>
            <li className="text-align-left">Warranties</li>
            <li className="text-align-left">
              Providing outstanding service since 1963
            </li>
            <li className="text-align-left">
              Illinois Plumbing Contractor 055-020192
            </li>
            <li className="text-align-left">
              Quality brand name pumps and water heaters
            </li>
          </ul>
        </Accordion>
        <Accordion title="Are your plumbers fully qualified and insured">
          <p>
            Yes. Anyone I send to your home is fully insured, registered with
            the Province of Ontario.
          </p>
        </Accordion>
        <Accordion title="How much will my work cost? What are your hourly rates ?">
          <p>
            The great news is that we don’t charge by the hour. Once we give you
            a quote that is the complete price for you to approve before we get
            started.
          </p>
        </Accordion>
      </div>
    </Container>
  );
};

export default More;

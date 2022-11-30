import React from "react";

const Container = ({ children, CS }) => {
  return (
    <section className={`container mx-auto px-1 lg:px-12 ${CS ? CS : ""}`}>
      {children}
    </section>
  );
};

export default Container;

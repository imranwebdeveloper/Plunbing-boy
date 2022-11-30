import React from "react";
import AuthContextProvider from "./AuthContextProvider";
import ReviewsContextProvider from "./ReviewsContextProvider";
import ServicesContextProvider from "./ServicesContextProvider";

const ContextProvider = ({ children }) => {
  return (
    <ServicesContextProvider>
      <ReviewsContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>;
      </ReviewsContextProvider>
    </ServicesContextProvider>
  );
};

export default ContextProvider;

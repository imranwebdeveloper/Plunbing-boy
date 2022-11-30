import React, { createContext, useState } from "react";
export const ServiceContext = createContext();

const ServicesContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const servicesValue = { services, setServices, loading, setLoading };

  return (
    <ServiceContext.Provider value={servicesValue}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServicesContextProvider;

import { createContext, useContext, useState } from "react";

const CareerContext = createContext();

export function CareerProvider({ children }) {

  const [careerData, setCareerData] = useState({

    resume: null,

    role: "",

    company: "",

    jobDescription: ""

  });

  return (

    <CareerContext.Provider
      value={{
        careerData,
        setCareerData
      }}
    >

      {children}

    </CareerContext.Provider>

  );

}

export function useCareer() {

  return useContext(CareerContext);

}
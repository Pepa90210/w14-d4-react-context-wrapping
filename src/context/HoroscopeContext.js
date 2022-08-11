import { createContext, useContext, useState } from "react";
import horoscopesObj from "../data/horoscopes";

const HoroscopeContext = createContext();

export function useSign() {
  return useContext(HoroscopeContext);
}

const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Aquarius");
  const sign = horoscopesObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;

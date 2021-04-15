import React, { FC, useState } from "react";

interface IData {
  namePoke: string;
  setNamePoke: Function;
}

const PokeNameContext = React.createContext<IData>({
  namePoke: "",
  setNamePoke: () => {},
});

export const PokeNameContextProvider: FC = ({ children }) => {
  const [namePoke, setNamePoke] = useState("");

  return (
    <PokeNameContext.Provider value={{ namePoke, setNamePoke }}>
      {children}
    </PokeNameContext.Provider>
  );
};

export default PokeNameContext;

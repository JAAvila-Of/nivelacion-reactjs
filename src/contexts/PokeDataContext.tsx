import React, { useState, FC } from "react";
import type { ICard } from "../models/ICard";

interface IData {
  searched: ICard;
  setSearched: Function;
}

const Context = React.createContext<IData>({
  searched: {},
  setSearched: () => {},
});

export const PokeContextProvider: FC = ({ children }) => {
  const [searched, setSearched] = useState({});

  return (
    <Context.Provider value={{ searched, setSearched }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

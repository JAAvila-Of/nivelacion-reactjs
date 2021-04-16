import React, { useState, FC } from "react";
import type { ICard } from "models/ICard";

interface IData {
  pokes: Array<ICard>;
  setPokes: Function;
}

const Context = React.createContext<IData>({
  pokes: [],
  setPokes: () => {},
});

export const PokeListContextProvider: FC = ({ children }) => {
  const [pokes, setPokes] = useState([]);

  return (
    <Context.Provider value={{ pokes, setPokes }}>{children}</Context.Provider>
  );
};

export default Context;

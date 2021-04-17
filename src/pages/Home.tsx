import React, { useContext } from "react";
import PokeListContext from "contexts/PokeDataList";
import { CardComponent } from "components/Card/index";

export const Home = () => {
  const { pokes } = useContext(PokeListContext);

  return (
    <>
      {pokes.map((poke) => {
        return <CardComponent list={poke} />;
      })}
    </>
  );
};

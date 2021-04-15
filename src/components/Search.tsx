import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { Card } from "../components/card";
import PokeNameContext from "../contexts/PokeNameContext";

export const Search = () => {
  const { namePoke, setNamePoke } = useContext(PokeNameContext);

  const [pokeName, setpokeName] = useState<string>(namePoke || "");

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault();
    //console.log(pokeName);
    setpokeName(e.target.value);
    setNamePoke(e.target.value);
    console.log(namePoke);
  };

  const submitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={submitEvent}>
        <input
          type="text"
          value={pokeName}
          onChange={changeInput}
          placeholder="Busca un Pokemon..."
        />
      </form>

      <Card name={pokeName} />
    </div>
  );
};

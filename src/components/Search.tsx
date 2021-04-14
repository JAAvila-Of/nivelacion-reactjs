import React, { ChangeEvent, FormEvent, useState } from "react";
import { Card } from "../components/card";

export const Search = () => {
  const [pokeName, setpokeName] = useState<string>("");

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault();
    console.log(pokeName);
    setpokeName(e.target.value);
  };

  const submitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={submitEvent}>
        <input type="text" value={pokeName} onChange={changeInput} />
      </form>

      <Card name={pokeName} />
    </div>
  );
};

import React from "react";
import { useState, useEffect } from "react";
import { pokeFiltro } from "../controllers/pokeController";
import type { ICard } from "../models/ICard";
import { getPoke } from "../services/pokeapi";

export const Card = (prop: any) => {
  const { name } = prop;
  let namePoke: string = name || "pikachu";
  const [dataPoke, setdataPoke] = useState<ICard>({
    image: "",
    name: "",
  });

  useEffect(() => {
    const process = async () => {
      const pokeJson = await getPoke(namePoke);
      const pre: ICard = pokeFiltro(pokeJson);
      setdataPoke(pre);
      console.log("yes");
    };
    process();
  }, [namePoke, name]);

  return (
    <>
      <div>
        <img src={dataPoke.image} alt="pokeimagen" />
        <p>{dataPoke.name}</p>
      </div>
    </>
  );
};

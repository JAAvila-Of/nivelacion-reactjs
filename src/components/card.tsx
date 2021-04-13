import React from "react";
import { useState, useEffect } from "react";
import { pokeFiltro } from "../controllers/pokeController";
//import { ICard } from "../models/ICard";
import { getPoke } from "../services/pokeapi";

export const Card = () => {
  let namePoke: string = "pikachu";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const process = async () => {
      const pokeJson = await getPoke(namePoke);
      const pre = pokeFiltro(pokeJson);
      setName(pre.name);
      setImage(pre.image);
    };
    process();
  }, []);

  return (
    <div>
      <img src={image} alt="pokeimagen" />
      <p>{name}</p>
    </div>
  );
};

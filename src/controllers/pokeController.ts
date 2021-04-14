import type { ICard } from "../models/ICard";

export const pokeFiltro = (data: any) => {
  if (!data)
    return {
      image: "",
      name: "",
    };

  const result: ICard = {
    image: data.sprites.other["official-artwork"].front_default,
    name: data.name,
  };

  return result;
};

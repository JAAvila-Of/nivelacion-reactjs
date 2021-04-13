import type { ICard } from "../models/ICard";

export const pokeFiltro = (data: any) => {
  const result: ICard = {
    image: data.sprites.other["official-artwork"].front_default,
    name: data.name,
  };

  //console.log(result);

  return result;
};

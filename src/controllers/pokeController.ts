import type { ICard } from "../models/ICard";

export const pokeFiltro = (data: any): ICard => {
  if (!data) {
    const error: ICard = {
      result: false,
    };
    return error;
  }

  const result: ICard = {
    result: true,
    image: data.sprites.other["official-artwork"].front_default,
    name: data.name,
  };

  return result;
};

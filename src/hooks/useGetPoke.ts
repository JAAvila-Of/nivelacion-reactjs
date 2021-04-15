import { useState, useEffect, useContext } from "react";
import { pokeFiltro } from "../controllers/pokeController";
import type { ICard } from "../models/ICard";
import { getPoke } from "../services/pokeapi";
import pokeDataContext from "../contexts/PokeDataContext";

export const useGetPokes = (name: string) => {
  const [isSearch, setIsSearh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataPoke, setdataPoke] = useState<ICard>({});

  useEffect(() => {
    if (name === "") {
      setIsSearh(false);
      setIsLoading(false);
    } else {
      setIsSearh(true);
      setIsLoading(true);

      getPoke(name).then((response) => {
        const pokeData: ICard = pokeFiltro(response);

        if (pokeData.result) {
          setIsLoading(false);
          setdataPoke(pokeData);
        }
      });
    }
  }, [name]);

  return { isSearch, isLoading, dataPoke };
};

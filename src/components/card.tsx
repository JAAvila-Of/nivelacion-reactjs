import { useContext } from "react";
import { useGetPokes } from "../hooks/useGetPoke";
import PokeDataContext from "../contexts/PokeDataContext";

export const Card = (prop: any) => {
  const { name } = prop;
  const { searched, setSearched } = useContext(PokeDataContext);
  const { dataPoke, isLoading, isSearch } = useGetPokes(name);

  if (searched.name === name) {
    return (
      <>
        <div>
          <img src={searched.image} alt="pokeimagen" />
          <p>{searched.name}</p>
        </div>
      </>
    );
  }

  if (!isSearch) {
    return <div>Busca un Pokemon</div>;
  }

  if (isLoading) {
    return <div>Buscando...</div>;
  }

  setSearched(dataPoke);

  return (
    <>
      <div>
        <img src={dataPoke.image} alt="pokeimagen" />
        <p>{dataPoke.name}</p>
      </div>
    </>
  );
};

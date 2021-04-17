import { useContext, MouseEventHandler } from "react";
import { useGetPokes } from "hooks/useGetPoke";
import PokeDataContext from "contexts/PokeDataContext";
import PokeListContext from "contexts/PokeDataList";
import PokeNameContext from "contexts/PokeNameContext";
import { CardComponent } from "components/Card/index";

export const Card = () => {
  const { namePoke } = useContext(PokeNameContext);
  const { searched, setSearched } = useContext(PokeDataContext);
  const { pokes, setPokes } = useContext(PokeListContext);
  const { dataPoke, isLoading, isSearch } = useGetPokes(namePoke);

  const savePoke: MouseEventHandler = async () => {
    setPokes([...pokes, dataPoke]);
  };

  if (searched.name === namePoke) {
    console.log("searched");

    return (
      <CardComponent savePoke={savePoke} list={searched} isSearch={true} />
    );
  }

  setSearched(dataPoke);

  if (!isSearch) {
    return <div>Busca un Pokemon</div>;
  }

  if (isLoading) {
    return <div>Buscando...</div>;
  }

  return <CardComponent list={dataPoke} savePoke={savePoke} isSearch={true} />;
};

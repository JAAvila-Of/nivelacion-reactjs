import { useContext, ChangeEvent } from "react";
import PokeNameContext from "../contexts/PokeNameContext";

export const BarSearch = () => {
  const { namePoke, setNamePoke } = useContext(PokeNameContext);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNamePoke(e.target.value);
  };

  return (
    <>
      {
        <input
          type="text"
          value={namePoke}
          onChange={changeInput}
          placeholder="Busca un Pokemon..."
          className=""
        />
      }
    </>
  );
};

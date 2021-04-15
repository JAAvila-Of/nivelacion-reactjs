const URL: string = "https://pokeapi.co/api/v2/pokemon/";

export const getPoke = async (id: string) => {
  if (id === "") return false;
  const searchPoke = await fetch(`${URL}${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (searchPoke.status === 404) return false;

  const result = await searchPoke.json();

  return result;
};

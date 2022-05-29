import axios from "axios";

export const searchByAbility = async (url: string) => {
  const data = (await axios.get(url)).data;
  return data.pokemon.map((p: { pokemon: any }) => p.pokemon);
};

export const searchByHabitat = async (url: string) => {
  const data = (await axios.get(url)).data;
  return data.pokemon_species;
};

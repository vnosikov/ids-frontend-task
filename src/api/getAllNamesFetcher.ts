import axios from "axios";

export default async (url: string) => {
  const total = (await axios.get(url)).data.count;
  const allData = (await axios.get(`${url}?limit=${total}`)).data;
  return allData.results.map((ability: { name: string; }) => ability.name);
}

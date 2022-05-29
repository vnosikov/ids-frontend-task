import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { ClipLoader } from "react-spinners";
import fetcher from "../../api/fetcher";
import { List } from "../../components/List";
import { Pages } from "../../components/Pages";

const LIMIT = 20;

export const HomePage = () => {
  const { page: pageParam = '0' } = useParams();
  const page = Number(pageParam);

  const pokemonsListUrl = `https://pokeapi.co/api/v2/pokemon?offset=${page * LIMIT}&limit=${LIMIT}`
  const { data } = useSWR(pokemonsListUrl, fetcher);

  if (!data) {
    return <ClipLoader />
  }

  const { count, results } = data;
  const totalPages = Math.ceil(count / LIMIT);

  return (
    <div>
      <div><Link to="/filters">Filters</Link></div>
      <List results={results} />
      <Pages pagesNumber={totalPages}/>
    </div>
  );
};

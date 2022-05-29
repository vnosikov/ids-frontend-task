import React, { useState } from "react";
import useSWR from "swr";
import { ClipLoader } from "react-spinners";
import { List } from "../../components/List";
import getAllNamesFetcher from "../../api/getAllNamesFetcher";
import { Filters } from "../../components/Filters/Filters";
import { OptionType } from "../../types/options";
import { searchByAbility, searchByHabitat } from "../../api/searchByFetcher";
import { Link } from "react-router-dom";
import { intersectionBy, uniqBy } from "lodash";

const makeOptions = (arr: Array<String>) =>
  arr.map((opt) => ({
    value: opt,
    label: opt,
  }));

export const FilteredSearch = () => {
  const [currentAbility, setCurrentAbility] = useState<OptionType | undefined>(
    undefined
  );

  const abilitiesUrl = `https://pokeapi.co/api/v2/ability`;

  const { data: allAbilitiesData } = useSWR(abilitiesUrl, getAllNamesFetcher);

  const doAbilitySearch = currentAbility && currentAbility?.value !== "any";

  const abilitySearchUrl = `https://pokeapi.co/api/v2/ability/${currentAbility?.value}`;
  const { data: pokemonsWithAbilityData } = useSWR(
    doAbilitySearch ? abilitySearchUrl : null,
    searchByAbility
  );

  const isLoading = !allAbilitiesData;

  if (isLoading) {
    return <ClipLoader />;
  }

  const results = pokemonsWithAbilityData ?? [];

  return (
    <div>
      <Filters
        abilities={makeOptions(["any", ...allAbilitiesData])}
        currentAbility={currentAbility}
        setCurrentAbility={setCurrentAbility}
      />
      {results.length === 0 && (
        <div>
          <div>Please Select Something</div>
          <Link to="/">Get All Pokemons</Link>
        </div>
      )}
      <List results={results} />
    </div>
  );
};

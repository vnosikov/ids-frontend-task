import React from 'react';
import useSWR from 'swr';
import { IBasePokemon } from '../../types/pokemon';
import { Card } from '../Card';
import { Wrapper } from './styled';

export const List: React.FC<Props> = ({ results }) => {
  return (
    <Wrapper>
      {results.map(pokemon => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>)}
    </Wrapper>
  );
};

interface Props {
  results: Array<IBasePokemon>;
}
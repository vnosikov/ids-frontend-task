import React from 'react';
import { ClipLoader } from 'react-spinners';
import useSWR from 'swr';
import fetcher from '../../api/fetcher';
import { IBasePokemon } from '../../types/pokemon';
import { Sprites } from './Sprites';
import { Wrapper, Header } from './styled';

export const Card: React.FC<IBasePokemon> = ({ name, url }) => {
  const { data, error } = useSWR(url, fetcher);

  console.log('DETAILS', name, data);

  const isLoading = (data === undefined);

  return (
    <Wrapper>
      <Header>{name}</Header>
      {isLoading && <ClipLoader />}
      {!isLoading && <Sprites sprites={data.sprites} />}
      {!isLoading && <div>abils</div>}
    </Wrapper>
  );
}

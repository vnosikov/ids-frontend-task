import React from 'react';
import { times } from 'lodash';
import { PageButton, Wrapper } from './styled';

export const Pages: React.FC<Props> = ({ pagesNumber }) => (
  <Wrapper>
    {times(pagesNumber, String).map(i => (
      <PageButton key={i} to={`/${i}`} >
        {i}
      </PageButton>
    ))}
  </Wrapper>
)

interface Props {
  pagesNumber: number;
};

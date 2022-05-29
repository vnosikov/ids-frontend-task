import React from "react";
import { times } from "lodash";
import { PageButton, ActivePageButton, Wrapper } from "./styled";

export const Pages: React.FC<Props> = ({ pagesNumber, currentPage }) => (
  <Wrapper>
    <PageButton to="/">{"<<"}</PageButton>
    {currentPage !== 0 && (
      <PageButton to={`/${currentPage - 1}`}>{currentPage}</PageButton>
    )}
    <ActivePageButton to="#">{currentPage + 1}</ActivePageButton>
    {currentPage + 1 !== pagesNumber && (
      <PageButton to={`/${currentPage + 1}`}>{currentPage + 2}</PageButton>
    )}
    <PageButton to={`/${pagesNumber - 1}`}>{">>"}</PageButton>
  </Wrapper>
);

interface Props {
  pagesNumber: number;
  currentPage: number;
}

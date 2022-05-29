import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageButton = styled(NavLink)`
  display: block;
  width: 32px;
  padding: 8px;
  margin: 8px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
`;

export const ActivePageButton = styled(PageButton)`
  background-color: grey;
  cursor: default;
`;

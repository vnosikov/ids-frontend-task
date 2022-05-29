import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageButton = styled(NavLink)`
  width: 32px;
  height: 32px'
  margin: 8px;
  text-decoration: none;
  color: black;
`;
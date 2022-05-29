import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 12px;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  overflow-y: auto;
  grid-gap: 8px;
`;

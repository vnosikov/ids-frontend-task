import React from "react";
import { OptionType } from "../../types/options";
import { Wrapper, StyledSelect } from "./styled";

export const Filters: React.FC<Props> = ({
  abilities,
  currentAbility,
  setCurrentAbility,
}) => (
  <Wrapper>
    <StyledSelect
      options={abilities}
      value={currentAbility}
      onChange={(newValue) => {
        setCurrentAbility(newValue);
      }}
    />
  </Wrapper>
);

interface Props {
  abilities: Array<OptionType>;
  currentAbility?: OptionType;
  setCurrentAbility: Function;
}

import React from "react";
import { AbilitiesWrapper } from "./styled";

export const Abilities: React.FC<Props> = ({ abilities }) => (
  <AbilitiesWrapper>
    {abilities.map(({ ability }) => (
      <div key={ability.name}>{ability.name}</div>
    ))}
  </AbilitiesWrapper>
);

interface Props {
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
}

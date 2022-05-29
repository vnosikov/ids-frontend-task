import React from "react";

export const Sprites: React.FC<Props> = ({ sprites }) => (
  <div>
    <img src={sprites.front_default} />
    <img src={sprites.back_default} />
  </div>
);

interface Props {
  sprites: {
    front_default: string;
    back_default: string;
  };
}

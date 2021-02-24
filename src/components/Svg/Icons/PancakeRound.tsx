import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 38" {...props}>
      <circle cx="16" cy="16" r="16" fill="#F7A8B8" />
    </Svg>
  );
};

export default Icon;

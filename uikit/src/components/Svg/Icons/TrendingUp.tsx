import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path d="M6.15 36 4 33.85 18.6 19.3l8.35 8.35L39 15.6h-6.35v-3H44v11.35h-2.95V17.8L26.9 31.95l-8.35-8.35Z"/>
    </Svg>
  );
};

export default Icon;

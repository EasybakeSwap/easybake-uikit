import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg id="NoProfileAvatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.24 176.1">
      <path
        fill="#351327"
        d="M166.15,78.49c.13,48.19-39.17,87.92-88.49,87.66A88,88,0,0,1-10.08,77.89c0-48.45,39.83-88.55,89.66-87.84C126.53-9.27,166.64,29.14,166.15,78.49Z"
        transform="translate(10.08 9.96)"
      />
      <path
        fill="#f0699e"
        d="M78,125c-12.11,0-24.22,0-36.33,0-8,0-10.54-2.68-10.54-10.59,0-12.56,5.45-20.53,17.49-25,20.79-7.66,41.47-7.42,61.93,1.38,11.76,5,15.68,16.15,14,27.73-.62,4.4-3.58,6.38-9.12,6.42-12.49.08-25,0-37.47,0Z"
        transform="translate(10.08 9.96)"
      />
      <path
        fill="#f0699e"
        d="M101.34,54.94a23.31,23.31,0,1,1-23.2-23.76C91.27,31.31,101.37,41.65,101.34,54.94Z"
        transform="translate(10.08 9.96)"
      />
    </Svg>
  );
};

export default Icon;

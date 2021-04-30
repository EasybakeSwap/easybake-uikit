import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  ovenPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const OvenPrice: React.FC<Props> = ({ ovenPriceUsd }) => {
  return ovenPriceUsd ? (
    <PriceLink href="https://info.easybake.finance/token/0x95b3B3E534DA76CBa9DEd682eedf8724eF8e38aB" target="_blank">
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${ovenPriceUsd.toFixed(2)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(OvenPrice);

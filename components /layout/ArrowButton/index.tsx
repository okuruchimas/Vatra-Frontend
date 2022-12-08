import React from "react";
import { Circle } from "../../JoinUs";
import styled from "@emotion/styled";

const ArrowButton = (onClick: any) => {
  return (
    <Wrap onClick={() => onClick()}>
      <ArrowRight src="/icons/arrows/arrowRight.svg" />
      <Circle isEmpty />
    </Wrap>
  );
};

export default ArrowButton;

const Wrap = styled.div`
  position: absolute;
  right: 4vw;
  bottom: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: min-content;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    img {
      transform: translatex(32px);
      z-index: 1;
    }
  }
`;

const ArrowRight = styled.img`
  width: 12vw;
  transition: all 0.3s linear;
`;

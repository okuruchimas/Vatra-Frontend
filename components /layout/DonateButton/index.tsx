import React, { Fragment } from "react";
import styled from "@emotion/styled";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { fadeInLeft } from "react-animations";
import { keyframes } from "@emotion/react";

interface Props {}

const DonateButton = ({}: Props) => {
  const { isDesktop } = useWindowDimensions();

  return (
    <Wrap>
      <Button>Donate</Button>
      {isDesktop && <Lang>EN</Lang>}
    </Wrap>
  );
};

export default DonateButton;

const test3 = keyframes`${fadeInLeft}`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 960px) {
    animation: 1s ${test3};
  }
`;

const Button = styled.button`
  margin-right: 1vw;
  width: 9vw;
  height: 4vh;
  color: #b11212;
  font-size: 2vh;
  background: inherit;
  border: 1px solid #fff;
  text-transform: uppercase;
  border-radius: 60px;
  cursor: pointer;
  @media (max-width: 960px) {
    font-family: "namu-1400";
    width: 50vw;
    height: 44px;
  }
  &:hover {
    background: #fff;
    color: #b11212;
  }
`;

const Lang = styled.span`
  font-family: "namu-pro";
  font-size: 2vh;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

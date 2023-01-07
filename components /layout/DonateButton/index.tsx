import React, { Fragment } from "react";
import styled from "@emotion/styled";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

interface Props {}

const DonateButton = ({}: Props) => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Button>Donate</Button>
      {width > maxMobileWidth && <Lang>EN</Lang>}
    </Wrap>
  );
};

export default DonateButton;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  margin-right: 2vw;
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
    background: #b11212;
    color: #fff;
    border: 1px solid #b11212;
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

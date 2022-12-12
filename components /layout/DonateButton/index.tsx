import React, { Fragment } from "react";
import styled from "@emotion/styled";

type Props = {
  isHint: boolean;
  setHint: (hint: boolean) => any;
};

const DonateButton = ({ isHint, setHint }: Props) => {
  return (
    <Fragment>
      <Button
        onMouseEnter={() => setHint(true)}
        onMouseLeave={() => setHint(false)}
      >
        Donate
      </Button>
      <Hint isHint={isHint}>
        <RedText>Наш театр є незалежним проєктом. </RedText>
        Тому, якщо маєте бажання і можливість матеріально підтримати акторів —
        надішліть, будь ласка, будь-яку суму.
      </Hint>
    </Fragment>
  );
};

export default DonateButton;

const Button = styled.button`
  margin-right: 2vw;
  width: 40vw;
  height: 4vh;
  color: #000000;
  font-size: 2vh;
  border: 1px solid #000000;
  background: #fff;
  text-transform: uppercase;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    background: inherit;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const Hint = styled.div<HintProps>`
  padding: 1vh 1vw;
  position: absolute;
  top: 8vh;
  right: 0;
  display: ${({ isHint }: HintProps) => (isHint ? "block" : "none")};
  font-family: "namu-1750";
  width: 20vw;
  font-weight: 300;
  font-size: 1.6vh;
  color: #909090;
  background-image: url("/icons/gradients/dottBackground.svg");
  background-color: #181818;
  border-radius: 12px;
  border: 1px solid #b0b0b0;
`;

const RedText = styled.span`
  color: #801515;
`;

type HintProps = { isHint?: boolean };

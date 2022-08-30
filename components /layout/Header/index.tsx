import styled from "@emotion/styled";
import { useState } from "react";

const arrMenu: string[] = ["Афіша", "Про Театр", "Команда", "Контакти"];

const Header = () => {
  const [isHint, setHint] = useState<boolean>(false);
  return (
    <Wrap>
      <Logo src="/icons/logo.svg" />
      <MenuWrap>
        <HintWrap>
          <Button
            onMouseEnter={() => setHint(true)}
            onMouseLeave={() => setHint(false)}
          >
            Donate
          </Button>
          <Hint isHint={isHint}>
            <RedText>Наш театр є незалежним проєктом. </RedText>
            Тому, якщо маєте бажання і можливість матеріально підтримати акторів
            — надішліть, будь ласка, будь-яку суму.
          </Hint>
        </HintWrap>
        {arrMenu.map((value: string) => (
          <TextMenu key={value}>{value}</TextMenu>
        ))}
      </MenuWrap>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 6vw;
  height: 8vh;
  background-image: url("/icons/dottBackground.svg");
  background-color: #181818;
  border-bottom: 1px solid #801515;
`;

const Logo = styled.img`
  width: auto;
  height: 2vh;
  cursor: pointer;
`;
const Button = styled.button`
  width: 12vw;
  height: 4vh;
  color: #ffffff;
  font-size: 2vh;
  border: 1px solid #ffffff;
  background: inherit;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    background: #b11212;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;
const HintWrap = styled.div``;
const Hint = styled.div<HintProps>`
  padding: 1vh 1vw;
  position: absolute;
  top: 8vh;
  display: ${({ isHint }: HintProps) => (isHint ? "block" : "none")};
  font-family: "namu-1750";
  width: 20vw;
  font-weight: 300;
  font-size: 1.6vh;
  color: #909090;
  background-image: url("/icons/dottBackground.svg");
  background-color: #181818;
  border-radius: 12px;
  border: 1px solid #b0b0b0;
`;
const RedText = styled.span`
  color: #801515;
`;

const TextMenu = styled.span`
  color: #b0b0b0;
  font-family: "namu-pro";
  font-weight: 400;
  font-size: 2vh;
  margin-left: 6vw;
  cursor: pointer;
  &:hover {
    text-decoration: underline;,
  }
`;

type HintProps = { isHint?: boolean };

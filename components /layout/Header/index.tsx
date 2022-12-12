import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import DonateButton from "../DonateButton";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const arrMenu: { text: string; to: string }[] = [
  { text: "Афіша", to: "poster" },
  { text: "Про Театр", to: "aboutUs" },
  { text: "Команда", to: "team" },
  { text: "Контакти", to: "contacts" },
];

const Header = () => {
  const [isHint, setHint] = useState<boolean>(false);
  const { push } = useRouter();
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Link
        onClick={() => push("/")}
        to="/"
        spy
        smooth
        offset={-100}
        duration={3200}
        isDynamic
      >
        <LogoVatra src="/icons/logo/logo.svg" />
      </Link>
      <BurgerIcon src="/icons/logo/burger.svg" />
      <Navbar>
        {arrMenu.map((item, index) => (
          <ItemList
            to={item.to}
            spy={true}
            smooth={true}
            offset={20}
            duration={2000}
            onClick={() => {}}
            key={index}
          >
            {item.text}
          </ItemList>
        ))}
      </Navbar>
      {width > maxMobileWidth && (
        <Fragment>
          <DonateButton isHint={isHint} setHint={setHint} />
          <Lang>EN</Lang>
        </Fragment>
      )}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 92vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2vh 0;
  margin: 0 4vw;
  height: 8vh;
  background-image: url("/icons/gradients/dottBackground.svg");
  background-color: #181818;
  animation: background-noise 0.5s linear infinite;
  border-bottom: 1px solid #ffffff;
`;

const LogoVatra = styled.img`
  width: 10vw;
  cursor: pointer;

  @media (max-width: 640px) {
    display: block;
    height: 4vh;
    width: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const BurgerIcon = styled.img`
  display: none;
  @media (max-width: 640px) {
    display: block;
    height: 3vh;
    width: auto;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 9vw;
  @media (max-width: 640px) {
    display: none;
  }
`;

const ItemList = styled(Link)`
  color: #b0b0b0;
  font-family: "namu-pro";
  font-weight: 400;
  font-size: 2vh;
  margin: 0 2vw;
  cursor: pointer;

  &:hover {
      text-decoration: underline;,
    }
`;

const Lang = styled.span`
  font-family: "namu-pro";
  font-size: 2vh;
  text-transform: uppercase
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

type HintProps = { isHint?: boolean };

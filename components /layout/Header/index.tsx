import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import DonateButton from "../DonateButton";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Footer from "../Footer";
import { Global, css } from "@emotion/react";

const arrMenu: { text: string; to: string }[] = [
  { text: "Афіша", to: "poster" },
  { text: "Про Театр", to: "aboutUs" },
  { text: "Команда", to: "team" },
  { text: "Контакти", to: "contacts" },
];

const GlobalStyles = css`
  body {
    overflow: hidden;
  }
`;

const Header = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
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
      <BurgerIcon
        src={isNavbar ? "/icons/close/close.svg" : "/icons/logo/burger.svg"}
        onClick={() => setIsNavbar(!isNavbar)}
      />
      {isNavbar && <Global styles={GlobalStyles} />}
      <Navbar isNavbar={isNavbar}>
        {width < maxMobileWidth && (
          <ItemList
            to="/"
            spy={true}
            smooth={true}
            offset={20}
            duration={2000}
            onClick={() => {
              setIsNavbar(!isNavbar);
            }}
          >
            головна
          </ItemList>
        )}
        {arrMenu.map((item, index) => (
          <ItemList
            isLast={arrMenu.length - 1 === index}
            to={item.to}
            spy={true}
            smooth={true}
            offset={20}
            duration={2000}
            onClick={() => {
              setIsNavbar(!isNavbar);
            }}
            key={index}
          >
            {item.text}
          </ItemList>
        ))}
        {width < maxMobileWidth && <Footer />}
      </Navbar>
      {width > maxMobileWidth && <DonateButton />}
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
  background-color: #1d1d1d;
  animation: background-noise 0.5s linear infinite;
  border-bottom: 1px solid #ffffff;
`;

const LogoVatra = styled.img`
  width: 8vw;
  cursor: pointer;

  @media (max-width: 960px) {
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
  @media (max-width: 960px) {
    display: block;
    height: 3vh;
    width: auto;
  }
`;

const Navbar = styled.div<{ isNavbar: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: -4vw;
  @media (max-width: 960px) {
    display: ${({ isNavbar }) => (isNavbar ? "flex" : "none")};
    background-image: url("/icons/gradients/dottBackground.svg");
    background-color: #1d1d1d;
    position: absolute;
    top: 8vh;
    left: -4vw;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: calc(92vh + 2px);
    width: 100vw;
    margin-right: 0;
  }
`;

const ItemList = styled(Link)<{ isLast?: boolean }>`
  color: #b0b0b0;
  font-family: "namu-pro";
  font-weight: 400; 
  font-size: 2vh;
  margin: 0 1.6vw;
  cursor: pointer;

  &:hover {
      text-decoration: underline;,
    }

  @media (max-width: 960px) {
    color: #fff;
    font-family: "namu-1400";
    margin: 2vh 4vw ;
    text-transform: uppercase;
    font-size: 3.2em;
    margin-bottom: ${({ isLast }) => (isLast ? "6vh" : "initial")};
    &:hover {
      text-decoration: none;,
    }
  }
`;

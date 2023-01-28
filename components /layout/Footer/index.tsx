import styled from "@emotion/styled";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Footer = () => {
  const { isDesktop } = useWindowDimensions();
  return (
    <Wrap>
      <LinkWrap
        href="https://instagram.com/teatr_varta?igshid=YmMyMTA2M2Y="
        target="_blank"
      >
        <Logo
          src={
            isDesktop
              ? "/icons/logo/instagram.svg"
              : "/icons/logo/instagramWhite.svg"
          }
          loading="lazy"
        />
        <Text>інстаграм</Text>
      </LinkWrap>
      <LinkWrap href="mailto:theatre.varta@gmail.com" target="_blank">
        <Text>theatre.varta@gmail.com</Text>
      </LinkWrap>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.address`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 92vw;
  height: 8vh;
  margin: 0 auto;
  border-top: 1px solid #ffffff;
`;

const Logo = styled.img`
  height: 2.4vh;
  width: 2.4vh;
  margin-right: 1vw;
  @media (max-width: 960px) {
    height: 3.2vh;
    width: 3.2vh;
  }
`;

const Text = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  text-transform: uppercase;
`;

const LinkWrap = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-style: normal;
  font-family: "namu-pro";
  font-size: 2vh;
  color: #b11212;
  padding: 1vh 2vw;
  border-radius: 24px;
  border: 1px solid #fff;

  @media (max-width: 960px) {
    color: #fff;
    padding: 1vh 4vw;
    max-height: 5vh;
    height: 5vh;
    font-size: 1.4vh;
  }
`;

import styled from "@emotion/styled";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Footer = () => {
  const { width, maxMobileWidth } = useWindowDimensions();
  return (
    <Wrap>
      <LinkWrap>
        <Logo
          src={
            width > maxMobileWidth
              ? "/icons/logo/instagram.svg"
              : "/icons/logo/instagramWhite.svg"
          }
          loading="lazy"
        />
        <Text>інстаграм</Text>
      </LinkWrap>
      <LinkWrap>
        <Text>theatre.varta@gmail.com</Text>
      </LinkWrap>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 92vw;
  margin: 0 4vw;
  height: 8vh;
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

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
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

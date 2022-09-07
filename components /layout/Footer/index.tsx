import styled from "@emotion/styled";
import { LogoVatra } from "../Header";

const Footer = () => {
  return (
    <Wrap>
      <SocialShareWrap>
        <FooterLogo src="/icons/logo/logoGray.svg" />
        <Logo src="/icons/logo/instagram.svg" /> <Text>інстаграм</Text>
        <Logo src="/icons/logo/telegram.svg" /> <Text>телеграм</Text>
      </SocialShareWrap>
      <Text>+38 067 378 37 20</Text>
      <Text>theatre.varta@gmail.com</Text>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 6vw;
  height: 8vh;
  border-top: 1px solid #ffffff;
`;

const SocialShareWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.img`
  margin-left: 4vw;
`;
const FooterLogo = styled(LogoVatra)`
  padding-right: 4vw;
`;

const Text = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;

  color: #ffffff;
  margin-left: 12px;
`;

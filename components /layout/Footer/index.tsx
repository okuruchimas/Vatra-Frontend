import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Wrap>
      <SocialShareWrap>
        <Logo src="/icons/logo/instagram.svg" loading="lazy" />
        <Text>інстаграм</Text>
        <Logo src="/icons/logo/telegram.svg" loading="lazy" />
        <Text>телеграм</Text>
      </SocialShareWrap>
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
  padding: 0 4vw;
  height: 8vh;
  border-top: 1px solid #ffffff;
`;

const SocialShareWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span:first-of-type {
    margin-right: 4vw;
  }
`;
const Logo = styled.img``;

const Text = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 12px;
`;

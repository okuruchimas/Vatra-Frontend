import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Wrap>
      <SocialShareWrap>
        <Logo src="/icons/instagram.svg" /> <Text>інстаграм</Text>
      </SocialShareWrap>
      <SocialShareWrap>
        <Logo src="/icons/telegram.svg" /> <Text>телеграм</Text>
      </SocialShareWrap>
      <Text>+380637088181</Text>
      <Text>lianeso4kaas@gmail.com</Text>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  height: 60px;
  border-top: 1px solid #ffffff;
`;

const SocialShareWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

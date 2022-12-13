import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Wrap>
      <LinkWrap>
        <Logo src="/icons/logo/instagram.svg" loading="lazy" />
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
  height: 2vw;
  width: 2vw;
  margin-right: 1vw;
  @media (max-width: 960px) {
    height: 6vw;
    width: 6vw;
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
    padding: 1vh 4vw;
    height: 5vh;
    font-size: 1.4vh;
  }
`;

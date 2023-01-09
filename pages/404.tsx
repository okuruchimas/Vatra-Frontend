import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const { push } = useRouter();

  return (
    <Wrap>
      <Logo src="/icons/logo/logo.svg" />
      <Wrapper>
        <Number src="/icons/logo/404.svg" />
        <Text>
          Ууупсс!! <span>пейдж нот фаунд</span>
        </Text>
      </Wrapper>
      <Button onClick={() => push("/")}>Повернутись на головну </Button>
    </Wrap>
  );
};

export default ErrorPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;
const Logo = styled.img`
  width: 8vw;
  margin-top: 2vh;
  margin-left: 4vw;
  align-self: flex-start;
  @media (max-width: 960px) {
    height: 4vh;
    width: auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20vh;
  padding-left: 20vw;
  @media (max-width: 960px) {
    padding-left: 0;
    flex-direction: column;
  }
`;
const Number = styled.img`
  width: 24vw;
  aspect-ratio: 177/155;
  @media (max-width: 960px) {
    width: 60vw;
  }
`;
const Text = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  font-family: "namu-pro";
  font-size: 3vh;
  margin-left: 2vw;
  span {
    color: #b11212;
  }
  @media (max-width: 960px) {
    text-align: center;
    margin-top: 2vh;
  }
`;
const Button = styled.div`
  border: 1px solid #fff;
  border-radius: 60px;
  font-family: "namu-1400";
  font-size: 3vh;
  padding: 2vh 2vw;
  margin-top: 4vh;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 960px) {
    margin-top: 22vh;
    font-size: 2.8vh;
    padding: 2vh 8vw;
  }
`;

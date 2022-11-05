import styled from "@emotion/styled";
import VideoPreview from "./VideoPreview";
import { BlackGradient } from "../layout/BlackGradients";
import { Link } from "react-scroll";

const Greeting = () => {
  return (
    <Wrap>
      <Preview src="/icons/logo/varta.svg" />
      <BuySection>
        <LeftText>
          На сторожі Української культури. <br /> Створений під час війни в
          Україні.
        </LeftText>
        <ArrowSmall src="/icons/arrows/arrowDown.svg" />
        <Button to="poster" spy smooth offset={60} duration={2000} isDynamic>
          Дивитись квитки
        </Button>
      </BuySection>

      <VideoPreview />

      <Info>
        <BlackGradient
          turnLeft
          size={28}
          animationTime={16}
          left={-16}
          src="/icons/gradients/left.svg"
        />
        <LeftBlock>
          <Title>Що ми робимо?</Title>
          <Subtitle>
            Ми створили театр для підтримки культурного фронту України
          </Subtitle>
        </LeftBlock>

        <RightBlock>
          <ArrowDown src="/icons/arrows/arrowDown.svg" />
          <Description>
            Увібравши в себе митців із усієї країни, ми просуваємо та творимо
            сучасне українське мистецтво в такий болючий для сердець час.
          </Description>
          <BlackGradient
            size={40}
            animationTime={20}
            right={-20}
            bottom={-52}
            src="/icons/gradients/right.svg"
          />
        </RightBlock>
      </Info>
    </Wrap>
  );
};

export default Greeting;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28vh 4vw 0;
  width: 100vw;
`;
const Preview = styled.img`
  width: 88vw;
`;
const BuySection = styled.div`
  padding: 18vh 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LeftText = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 2.4vh;
  color: #e1e1e1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18vh 0 6vh;
`;

const LeftBlock = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
`;

const RightBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 12vw;
`;

const Title = styled.span`
  font-family: "namu-1750";
  font-weight: 300;
  font-size: 2vh;
  padding: 2vh 0;
  text-transform: uppercase;

  color: #d8d8d8;
`;

const Subtitle = styled.span`
  font-family: "namu-1400";
  font-size: 4vh;
  color: #fefefe;
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-weight: 300;
  font-size: 2vh;
  color: #ffffff;
  padding-top: 64px;
`;

const Button = styled(Link)`
  font-family: "namu-1400";
  width: 16vw;
  text-transform: uppercase;
  text-align: right;
  color: #b11212;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ArrowDown = styled.img`
  height: 44vh;
  width: 2vw;
  animation: down 3s infinite;
  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(32px);
    }
    40% {
      transform: translate(0);
    }
  }
`;
const ArrowSmall = styled(ArrowDown)`
  height: 8vh;
  margin-left: auto;
  position: relative;
  left: 6vw;
  animation: down-small 3s infinite;
  @keyframes down-small {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(16px);
    }
    40% {
      transform: translate(0);
    }
  }
`;

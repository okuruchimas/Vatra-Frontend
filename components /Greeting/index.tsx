import styled from "@emotion/styled";
import VideoPreview from "./VideoPreview";
import Button from "../layout/Button";
import { RedGradient } from "../layout/Gradients";
import { BlackGradient } from "../layout/BlackGradients";

const Greeting = () => {
  return (
    <Wrap>
      <Preview src="/icons/varta.svg" />

      <RedGradient size={24} animationTime={12} left={-12} top={60}/>

      <BuySection>
        <LeftText>
          На сторожі Української культури. <br /> Створений під час війни.
        </LeftText>
        <RedGradient size={12} animationTime={8} right={4}/>
        <Button />
      </BuySection>

      <VideoPreview />

      <Info>
        <BlackGradient turnLeft size={28} animationTime={16}  left={-16} src="/icons/left.svg" />
        <LeftBlock>
          <Title>Що ми робимо?</Title>
          <Subtitle>
            Ми створили театр для підтримки культурного фронту України
          </Subtitle>
        </LeftBlock>

        <RightBlock>
          <ArrowDown src="/icons/arrowDown.svg" />
          <Description>
            Увібравши в себе митців із усієї країни, ми просуваємо та творимо
            сучасне українське мистецтво в такий болючий для сердець час.
          </Description>
          <BlackGradient size={36} animationTime={20}  right={-12} bottom={-52} src="/icons/right.svg"/>
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
  padding: 28vh 6vw 0;
  width: 100vw;
  
  // mix-blend-mode: screen;
  //animation: 44s -27s move-gradient infinite ease-in-out alternate;
  //&::before {
  //  animation-duration: 44s;
  //  animation-delay: -27s;
  //}

  //@keyframes move-gradient {
  //  from {
  //    transform: rotate(0deg) scale(12) translateX(-20px);
  //  }
  //  to {
  //    transform: rotate(360deg) scale(18) translateX(20px);
  //  }
  //}
`;
const Preview = styled.img`
  width: 96vw;
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
  font-size: 3vh;
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

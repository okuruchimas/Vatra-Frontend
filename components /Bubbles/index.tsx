import styled from "@emotion/styled";
import {
  BlueGradient,
  PurpleGradient,
  SkyGradient,
  YellowGradient,
} from "../layout/Gradients";

const Bubbles = () => {
  return (
    <Wrap>
      <BlueGradient size={8} animationTime={6} right={36} top={2} />
      <Title>наші цінності</Title>
      <BubblesWrap>
        <YellowGradient size={16} animationTime={8} left={-4} top={60} />
        <Rotate>
          <BubbleWrap>
            <Bubble>
              <TextSpan1 />
            </Bubble>
          </BubbleWrap>
          <BubbleWrap>
            <Bubble>
              <TextSpan2 />
            </Bubble>
          </BubbleWrap>
        </Rotate>
        <SkyGradient size={20} animationTime={4} right={24} top={40} />
        <PurpleGradient size={24} animationTime={4} left={-8} top={94} />
        <SecondRotate>
          <BubbleWrap>
            <Bubble>
              <TextSpan3 />
            </Bubble>
          </BubbleWrap>
          <BubbleWrap>
            <Bubble>
              <TextSpan4 />
            </Bubble>
          </BubbleWrap>
        </SecondRotate>
        <ThirdRotate>
          <BubbleWrap>
            <Bubble>
              <TextSpan5 />
            </Bubble>
          </BubbleWrap>
        </ThirdRotate>
      </BubblesWrap>
    </Wrap>
  );
};

export default Bubbles;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8vh 0 0;
  width: 100vw;
`;
const Title = styled.span`
  max-width: 60vw;
  padding-left: 6vw;
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 8vh;
  color: #bbbbbb;
  margin-bottom: 4vh;
`;

const BubblesWrap = styled.div`
  width: 100vw;
  padding: 6vw 8vw;
  min-height: 72vw;
`;

const BubbleWrap = styled.section`
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  perspective: 1200px;
  z-index: 1;
  perspective-origin: 50% 50%;
`;

const Bubble = styled.figure`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: relative;
  opacity: 0.4;
  margin: 0;

  background: radial-gradient(
    circle at 50% 55%,
    rgba(240, 245, 255, 0.9),
    rgba(240, 245, 255, 0.9) 40%,
    rgba(225, 238, 255, 0.8) 60%,
    rgba(43, 130, 255, 0.4)
  );
  animation: bubble-anim 2s ease-out infinite;
  &:before {
    content: "";
    position: absolute;
    top: 1%;
    left: 5%;
    border-radius: 100%;
    z-index: 2;
    filter: blur(0);
    height: 80%;
    width: 40%;
    background: radial-gradient(
      circle at 130% 130%,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 46%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.8) 58%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 5%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    filter: blur(1px);
    z-index: 2;
    transform: rotateZ(-30deg);

    display: block;
    background: radial-gradient(
      circle at 50% 80%,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0) 74%,
      white 80%,
      white 84%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @keyframes bubble-anim {
    0% {
      transform: scale(1);
    }

    20% {
      transform: scaleY(0.95) scaleX(1.05);
    }

    48% {
      transform: scaleY(1.1) scaleX(0.9);
    }

    68% {
      transform: scaleY(0.98) scaleX(1.02);
    }

    80% {
      transform: scaleY(1.02) scaleX(0.98);
    }

    97%,
    100% {
      transform: scale(1);
    }
  }
`;

const RotateDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 80%;
`;

const Rotate = styled(RotateDiv)`
  top: 54vh;
  margin-left: auto;
  animation: rotate-bubble-offset 20s linear infinite;

  @keyframes rotate-bubble-offset {
    0% {
      transform: rotateZ(-0.14turn);
    }
    50% {
      transform: rotateZ(0.12turn);
    }
    100% {
      transform: rotateZ(-0.14turn);
    }
  }
`;

const SecondRotate = styled(RotateDiv)`
  top: 0;
  animation: rotate 16s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotateZ(0.12turn);
    }
    50% {
      transform: rotateZ(-0.16turn);
    }

    100% {
      transform: rotateZ(0.12turn);
    }
  }
`;

const ThirdRotate = styled(RotateDiv)`
  bottom: 28vh;
  left: 16vw;
  margin-left: auto;

  animation: rotate-bubble 14s linear infinite;

  @keyframes rotate-bubble {
    0% {
      transform: rotateZ(-0.12turn);
    }
    50% {
      transform: rotateZ(0.12turn);
    }

    100% {
      transform: rotateZ(-0.12turn);
    }
  }
`;

const TextSpan = styled.span`
  margin: 30%;
  position: absolute;

  &:before {
    font-family: "namu-pro";
    font-size: 2vh;
    width: 280px;
    position: absolute;
    text-align: center;
    top: 36px;
    left: -80px;
    color: black;

    text-shadow: 0 15px 5px rgba(0, 0, 0, 0.1),
      10px 20px 5px rgba(0, 0, 0, 0.05), -10px 20px 5px rgba(0, 0, 0, 0.05);
  }
`;
const TextSpan1 = styled(TextSpan)`
  &:before {
    content: "Актуальність";
  }
`;
const TextSpan2 = styled(TextSpan)`
  &:before {
    content: "Підтримка та розвиток";
  }
`;
const TextSpan3 = styled(TextSpan)`
  &:before {
    content: "Мультидисциплінарність";
  }
`;
const TextSpan4 = styled(TextSpan)`
  &:before {
    content: "Любов і свобода самовираження";
  }
`;
const TextSpan5 = styled(TextSpan)`
  &:before {
    content: "Повага до свого корІння";
  }
`;

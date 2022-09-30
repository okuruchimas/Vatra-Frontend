import styled from "@emotion/styled";
import Greeting from "../../Greeting";
import TheaterPoster from "../../TheaterPoster";
import PhotoSlider from "../../PhotoSlider";
import AboutUs from "../../AboutUs";
import Bubbles from "../../Bubbles";
import MovingText from "../../MovingText";
import OurTeam from "../../OurTeam";
import JoinUs from "../../JoinUs";

type BubbleProps = {
  size: number;
  text: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const Bubble = (props: BubbleProps) => {
  return (
    <Wrap size={props.size}>
      <BubbleWrap>
        <TextSpan1 />
      </BubbleWrap>
    </Wrap>
  );
};

export default Bubble;

const Wrap = styled.section<{ size: number }>`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  display: inline-block;
  margin: 20px;
  perspective: 1200px;
  z-index: 1;
  perspective-origin: 50% 50%;
`;

const BubbleWrap = styled.figure`
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

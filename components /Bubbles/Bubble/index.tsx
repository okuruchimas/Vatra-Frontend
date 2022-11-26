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
  animationTime: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  text?: string;
};

const Bubble = (props: BubbleProps) => {
  return (
    <Wrap
      size={props.size}
      left={props.left}
      right={props.right}
      top={props.top}
      bottom={props.bottom}
      animationTime={props.animationTime}
    >
      <BubbleText>{props.text}</BubbleText>
    </Wrap>
  );
};

export default Bubble;

const Wrap = styled.div<BubbleProps>`
  position: absolute;
  height: ${({ size }) => `${size}vw`};
  width: ${({ size }) => `${size}vw`};
  left: ${({ left }) => (left ? `${left}vw` : "inherit")};
  right: ${({ right }) => (right ? `${right}vw` : "inherit")};
  top: ${({ top }) => (top ? `${top}vh` : "inherit")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}vh` : "inherit")};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  z-index: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100%;
`;

const BubbleText = styled.span`
  font-family: "namu-1750";
  font-weight: 400;
`;

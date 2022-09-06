import styled from "@emotion/styled";
import { GradientProps } from "../Gradients";

export const BlackGradient = styled.img<BlackGradientsProps>`
  position: absolute;
  z-index: 0;

  height: ${({ size }) => `${size}vw`};
  width: ${({ size }) => `${size}vw`};

  left: ${({ left }) => (left ? `${left}vw` : "inherit")};
  right: ${({ right }) => (right ? `${right}vw` : "inherit")};
  top: ${({ top }) => (top ? `${top}vh` : "inherit")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}vh` : "inherit")};

  border-radius: 50%;

  //gradient animation
  -moz-animation: ${({ animationTime, turnLeft }) =>
    `${
      turnLeft ? "infinity-rotate-l" : "infinity-rotate-r"
    } ${animationTime}s linear infinite`};
  -webkit-animation: ${({ animationTime, turnLeft }) =>
    `${
      turnLeft ? "infinity-rotate-l" : "infinity-rotate-r"
    } ${animationTime}s linear infinite`};
  animation: ${({ animationTime, turnLeft }) =>
    `${
      turnLeft ? "infinity-rotate-l" : "infinity-rotate-r"
    } ${animationTime}s linear infinite`};

  @keyframes infinity-rotate-r {
    0% {
      transform: rotateZ(1turn);
    }
    20% {
      transform: rotateZ(0.8turn);
    }
    40% {
      transform: rotateZ(0.6turn);
    }

    60% {
      transform: rotateZ(0.4turn);
    }
    80% {
      transform: rotateZ(0.2turn);
    }

    100% {
      transform: rotateZ(0);
    }
  }

  @keyframes infinity-rotate-l {
    0% {
      transform: rotateZ(0);
    }
    20% {
      transform: rotateZ(0.2turn);
    }
    40% {
      transform: rotateZ(0.4turn);
    }

    60% {
      transform: rotateZ(0.6turn);
    }
    80% {
      transform: rotateZ(0.8turn);
    }

    100% {
      transform: rotateZ(1turn);
    }
  }
`;

interface BlackGradientsProps extends GradientProps {
  turnLeft?: boolean;
}

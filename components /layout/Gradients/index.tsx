import styled from "@emotion/styled";

export const GradientTemplate = styled.div<GradientProps>`
  position: absolute;
  z-index: 0;

  height: ${({ size }) => `${size}vw`};
  width: ${({ size }) => `${size}vw`};

  left: ${({ left }) => (left ? `${left}vw` : "inherit")};
  right: ${({ right }) => (right ? `${right}vw` : "inherit")};
  top: ${({ top }) => (top ? `${top}vh` : "inherit")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}vh` : "inherit")};

  border-radius: 50%;

  background-size: 400% 400%;

  opacity: 0.8;

  //gradient animation
  -moz-animation: ${({ animationTime }) =>
    `gradient ${animationTime}s ease infinite`};
  -webkit-animation: ${({ animationTime }) =>
    `gradient ${animationTime}s ease infinite`};
  animation: ${({ animationTime }) =>
    `gradient ${animationTime}s ease infinite`};

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const RedGradient = styled(GradientTemplate)`
  -webkit-filter: blur(64px);
  filter: blur(64px);
  background: linear-gradient(
    -45deg,
    #803f3fff,
    #801515ad,
    #89141445,
    #b11212cc
  );
`;

export const BlueGradient = styled(GradientTemplate)`
  -webkit-filter: blur(68px);
  filter: blur(68px);
  background: linear-gradient(
    -45deg,
    #c0cff34f,
    #a5c2fa4f,
    #3d4f734f,
    #3c71f64f
  );
`;

export const YellowGradient = styled(GradientTemplate)`
  -webkit-filter: blur(80px);
  filter: blur(80px);
  background: linear-gradient(
    -45deg,
    #d7d2b987,
    #dacd5787,
    #6e642d87,
    #e5d52d87
  );
`;

export const PurpleGradient = styled(GradientTemplate)`
  -webkit-filter: blur(100px);
  filter: blur(100px);
  background: linear-gradient(
    -45deg,
    #8a7d884f,
    #b76fb34f,
    #794c754f,
    #7a45754f
  );
`;

export const SkyGradient = styled(GradientTemplate)`
  -webkit-filter: blur(80px);
  filter: blur(80px);
  background: linear-gradient(
    -45deg,
    #803f3fff,
    #a5c2fa4f,
    #b76fb34f,
    #dacd5787
  );
`;

export type GradientProps = {
  size: number;
  animationTime: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

import styled from "@emotion/styled";

export const Gradient = styled.div<GradientProps>`
  position: absolute;
  z-index: 0;

  height: ${({ size }) => (`${size}vw`)};
  width: ${({ size }) => (`${size}vw`)};
  
  left: ${({ left }) => (left ? `${left}vw` : "inherit")};
  right: ${({ right }) => (right ? `${right}vw` : "inherit")};
  top:${({ top }) => (top ? `${top}vh` : "inherit")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}vh` : "inherit")};
  
  border-radius: 50%;
  
  background:linear-gradient(-45deg, #909090,#801515, #89141445, #B11212CC);
  background-size: 400% 400%;
  -webkit-filter: blur(64px);
  filter: blur(64px);
  opacity: 0.8;
  
  //gradient animation
  -moz-animation: ${({ animationTime }) => (`gradient ${animationTime}s ease infinite`)};
  -webkit-animation: ${({ animationTime }) => (`gradient ${animationTime}s ease infinite`)};
  animation: ${({ animationTime }) => (`gradient ${animationTime}s ease infinite`)};
  
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

export type GradientProps = {
  size: number;
  animationTime: number;
  left?: number;
  right?: number;
  top?:number;
  bottom?: number;
}



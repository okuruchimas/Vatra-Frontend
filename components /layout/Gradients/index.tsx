import styled from "@emotion/styled";

export const GradientTemplate = styled.div<GradientProps>`
  position: absolute;
  z-index: 0;

  height: ${({ size }) => (`${size}vw`)};
  width: ${({ size }) => (`${size}vw`)};

  left: ${({ left }) => (left ? `${left}vw` : "inherit")};
  right: ${({ right }) => (right ? `${right}vw` : "inherit")};
  top: ${({ top }) => (top ? `${top}vh` : "inherit")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}vh` : "inherit")};

  border-radius: 50%;

  background-size: 400% 400%;

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
`

export const RedGradient = styled(GradientTemplate)`
  -webkit-filter: blur(64px);
  filter: blur(64px);
  background: linear-gradient(-45deg, #803F3FFF, #801515AD, #89141445, #B11212CC);
`;

export const BlueGradient = styled(GradientTemplate)`
  -webkit-filter: blur(68px);
  filter: blur(68px);
  background: linear-gradient(-45deg, #C0CFF34F, #A5C2FA4F, #3D4F734F, #3C71F64F);
`;

export const YellowGradient = styled(GradientTemplate)`
  -webkit-filter: blur(80px);
  filter: blur(80px);
  background: linear-gradient(-45deg, #D7D2B987, #DACD5787, #6E642D87, #E5D52D87);
`;

export const PurpleGradient = styled(GradientTemplate)`
  -webkit-filter: blur(100px);
  filter: blur(100px);
  background: linear-gradient(-45deg, #8A7D884F, #B76FB34F, #794C754F, #7A45754F);
`;

export const SkyGradient = styled(GradientTemplate)`
  -webkit-filter: blur(80px);
  filter: blur(80px);
  background: linear-gradient(-45deg, #803F3FFF, #A5C2FA4F,#B76FB34F, #DACD5787);
`;

export type GradientProps = {
  size: number;
  animationTime: number;
  left?: number;
  right?: number;
  top?:number;
  bottom?: number;
}



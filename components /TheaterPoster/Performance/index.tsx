import styled from "@emotion/styled";
import PerformanceInfo from "./PerormanceInfo";
import PerformanceImg from "./PerformanceImg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Dispatch, SetStateAction } from "react";
import { PerformanceType } from "../performances";

interface Props extends PerformanceType {
  left: number;
  index?: number;
  performancesLength: number;
}

function hexToRgb(hex: string, opacity = 0.1) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        o: opacity,
      }
    : { r: 0, g: 0, b: 0, o: 0 };
}

const Performance = (props: Props) => {
  const { width, maxMobileWidth } = useWindowDimensions();
  return (
    <Wrap
      isBlack={
        props.index === 0 || props.index === props.performancesLength - 1
      }
      isGray={props.index === 1 || props.index === props.performancesLength - 2}
      performanceColor={
        width > maxMobileWidth
          ? hexToRgb(props.performanceColor)
          : hexToRgb(props.mobileColor.color, props.mobileColor.opacity)
      }
    >
      {width < maxMobileWidth ? (
        <PerformanceImg
          title={props.title}
          link={props.link}
          left={props.left}
          date={props.date}
          imgUrl={props.imgUrl}
          type={props.type}
          isDesktop={width > maxMobileWidth}
        />
      ) : props.left ? (
        <>
          <PerformanceInfo
            title={props.title}
            description={props.description}
            link={props.link}
          />
          <PerformanceImg
            left={props.left}
            date={props.date}
            imgUrl={props.imgUrl}
            type={props.type}
            isDesktop={width > maxMobileWidth}
          />
        </>
      ) : (
        <>
          <PerformanceImg
            isDesktop={width > maxMobileWidth}
            left={props.left}
            date={props.date}
            imgUrl={props.imgUrl}
            type={props.type}
            title={props.title}
          />
          <PerformanceInfo
            title={props.title}
            description={props.description}
            link={props.link}
          />
        </>
      )}
    </Wrap>
  );
};

const Wrap = styled.div<{
  isBlack: boolean;
  isGray: boolean;
  performanceColor: any;
}>`
  position: relative;
  width: 92vw;
  display: flex;
  flex-direction: row;
  margin: 8vh 0 20vh;
  color: white;
  border-radius: 30px;
  background: ${({ performanceColor }) =>
    `rgba(${performanceColor.r}, ${performanceColor.g}, ${performanceColor.b}, ${performanceColor.o})`};

  @media (max-width: 960px) {
    flex-basis: ${({ isBlack, isGray }) =>
      isBlack || isGray ? "48%" : "100%"};
    height: min-content;
    flex-direction: column;
    border: none;
    border-radius: ${({ isBlack, isGray }) =>
      isBlack ? "0 30px 30px 30px" : isGray ? "30px 30px 0 30px" : "30px"};
    //width: 92vw;
    margin: 0 0 2vh;
  }
`;

export default Performance;

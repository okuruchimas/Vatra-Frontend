import styled from "@emotion/styled";
import PerformanceInfo from "./PerormanceInfo";
import PerformanceImg from "./PerformanceImg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Dispatch, SetStateAction } from "react";
import { PerformanceType } from "../performances";

interface Props extends PerformanceType {
  left: number;
  isOpen: boolean;
  setCurrentPerformance: Dispatch<SetStateAction<number | undefined>>;
  currentPerformance?: number;
  index?: number;
  isLast: boolean;
}

function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

const Performance = (props: Props) => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap
      isLast={props.isLast}
      performanceColor={hexToRgb(props.performanceColor)}
    >
      {props.left && width > maxMobileWidth ? (
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
            isOpen={props.isOpen}
          />
        </>
      ) : props.isOpen ? (
        <>
          <PerformanceImg
            index={props.index}
            isOpen={props.isOpen}
            currentPerformance={props.currentPerformance}
            setCurrentPerformance={props.setCurrentPerformance}
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
      ) : (
        <PerformanceImg
          index={props.index}
          isOpen={props.isOpen}
          left={props.left}
          date={props.date}
          imgUrl={props.imgUrl}
          type={props.type}
          title={props.title}
          currentPerformance={props.currentPerformance}
          setCurrentPerformance={props.setCurrentPerformance}
        />
      )}
    </Wrap>
  );
};

const Wrap = styled.div<{
  isLast: boolean;
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
    `rgba(${performanceColor.r}, ${performanceColor.g}, ${performanceColor.b}, 0.1)`};
  @media (max-width: 960px) {
    flex-direction: column;
    border: 1px solid #ffffff;
    border-radius: ${({ isLast }) => (isLast ? "30px" : "30px 30px 0 0")};
    border-bottom: ${({ isLast }) => (isLast ? "1px solid #ffffff" : "none")};
    width: 92vw;
    margin: 0 0 -4vh;
    padding-bottom: ${({ isLast }) => (isLast ? "2vh" : "6vh")};
  }
`;

export default Performance;

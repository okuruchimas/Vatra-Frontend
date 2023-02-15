import styled from "@emotion/styled";
import PerformanceInfo from "./PerormanceInfo";
import PerformanceImg from "./PerformanceImg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
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
  const { isDesktop } = useWindowDimensions();

  const isFirst = props.index === 0 || props.index === 1;
  const isBlack =
    props.index === 0 || props.index === props.performancesLength - 1;
  const isGray =
    props.index === 1 || props.index === props.performancesLength - 2;

  return (
    <Wrap
      isFirst={isFirst}
      isBlack={isBlack}
      isGray={isGray}
      performanceColor={
        isDesktop
          ? hexToRgb(props.performanceColor)
          : hexToRgb(props.mobileColor.color, props.mobileColor.opacity)
      }
    >
      {!isDesktop ? (
        <PerformanceImg
          isCentered={isBlack || isGray}
          title={props.title}
          link={props.link}
          left={props.left}
          date={props.date}
          imgUrl={props.imgUrl}
          type={props.type}
          isBuy={props.isBuy}
          isDesktop={isDesktop}
        />
      ) : props.left ? (
        <>
          <PerformanceInfo
            title={props.title}
            description={props.description}
            link={props.link}
            isBuy={props.isBuy}
          />
          <PerformanceImg
            left={props.left}
            date={props.date}
            imgUrl={props.imgUrl}
            type={props.type}
            isBuy={props.isBuy}
            isDesktop={isDesktop}
          />
        </>
      ) : (
        <>
          <PerformanceImg
            isDesktop={isDesktop}
            left={props.left}
            date={props.date}
            imgUrl={props.imgUrl}
            type={props.type}
            isBuy={props.isBuy}
            title={props.title}
          />
          <PerformanceInfo
            title={props.title}
            description={props.description}
            link={props.link}
            isBuy={props.isBuy}
          />
        </>
      )}
    </Wrap>
  );
};

const Wrap = styled.div<{
  isFirst: boolean;
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
    align-self: ${({ isFirst }) => (isFirst ? "flex-end" : "initial")};
    flex-basis: ${({ isBlack, isGray }) =>
      isBlack || isGray ? "49%" : "100%"};
    height: min-content;
    flex-direction: column;
    border: none;
    border-radius: ${({ isBlack, isGray }) =>
      isBlack ? "0 30px 30px 30px" : isGray ? "30px 30px 0 30px" : "30px"};
    margin: 0 0 1vh;
    padding: 6vh 4vw 2vh;
  }
`;

export default Performance;

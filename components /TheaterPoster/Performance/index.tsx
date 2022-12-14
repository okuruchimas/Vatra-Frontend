import styled from "@emotion/styled";
import PerformanceInfo from "./PerormanceInfo";
import PerformanceImg from "./PerformanceImg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Dispatch, SetStateAction } from "react";

export type RepertoireProps = {
  left: number;
  title: string;
  description: string;
  type: string;
  date: string;
  imgUrl: string;
  link: string;
  isOpen: boolean;
  setCurrentPerformance: Dispatch<SetStateAction<number | undefined>>;
  currentPerformance?: number;
  index?: number;
  isLast: boolean;
};

const Performance = (props: RepertoireProps) => {
  const { width, maxMobileWidth } = useWindowDimensions();
  console.log(props.isLast, "Performance");

  return (
    <Wrap isLast={props.isLast}>
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

const Wrap = styled.div<{ isLast: boolean }>`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin: 8vh 0;
  color: white;

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

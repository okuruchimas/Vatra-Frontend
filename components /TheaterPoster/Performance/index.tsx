import styled from "@emotion/styled";
import Button from "../../layout/Button";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import Repertoire from "../../../pages/[id]";
import PerformanceInfo from "./PerormanceInfo";
import PerformanceImg from "./PerformanceImg";
import performanceImg from "./PerformanceImg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export type RepertoireProps = {
  left: number;
  title: string;
  description: string;
  type: string;
  date: string;
  imgUrl: string;
  link: string;
};

const Performance = (performance: RepertoireProps) => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      {performance.left && width > maxMobileWidth ? (
        <>
          <PerformanceInfo
            title={performance.title}
            description={performance.description}
            link={performance.link}
          />
          <PerformanceImg
            left={performance.left}
            date={performance.date}
            imgUrl={performance.imgUrl}
            type={performance.type}
          />
        </>
      ) : (
        <>
          <PerformanceImg
            left={performance.left}
            date={performance.date}
            imgUrl={performance.imgUrl}
            type={performance.type}
            title={performance.title}
          />
          <PerformanceInfo
            title={performance.title}
            description={performance.description}
            link={performance.link}
          />
        </>
      )}
    </Wrap>
  );
};

export default Performance;

const Wrap = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin: 8vh 0;
  color: white;

  @media (max-width: 960px) {
    flex-direction: column;
    border: 1px solid #ffffff;
    border-bottom: none;
    border-radius: 30px 30px 0 0;
    width: 92vw;
    margin: 0 0 -4vh;
    padding-bottom: 12vh;
  }
`;

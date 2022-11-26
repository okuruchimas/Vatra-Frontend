import styled from "@emotion/styled";
import Button from "../../layout/Button";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import Repertoire from "../../../pages/[id]";
import PerformanceInfo from "./PerormanceInfo";
import PerformanceImg from "./PerformanceImg";
import performanceImg from "./PerformanceImg";

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
  return (
    <Wrap>
      {performance.left ? (
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
  height: 38vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin: 8vh 0;
  color: white;
`;

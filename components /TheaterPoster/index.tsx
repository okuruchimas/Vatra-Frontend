import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import Performance from "./Performance";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { PerformanceProps, TestArr } from "./performances";

const TheaterPoster = ({ performances }: PerformanceProps) => {
  const { width, maxMobileWidth } = useWindowDimensions();
  const [currentPerformance, setCurrentPerformance] = useState<
    number | undefined
  >(0);

  return (
    <Wrap id="poster">
      <RedTitle text="Що ми створюємо?" />
      <Title>вистави</Title>
      <Description>
        <p>
          Зустрівшись під одним дахом, ми зрозуміли, що наші цінности й думки
          збігаються, та через рефлексію створили перформанс «Перший День
          Війни».
        </p>
        <p>
          Але на цьому ми не зупинились і створили повноцінний театр, у якому
          говоримо про всі важливі та актуальні теми українського суспільства.
        </p>
      </Description>
      <PerformancesWrap>
        {performances.map((performance, index) => (
          <Performance
            key={index}
            left={(index + 1) % 2}
            title={performance.title}
            description={performance.description}
            type={performance.type}
            date={performance.date}
            imgUrl={performance.imgUrl}
            link={performance.link}
            performanceColor={performance.performanceColor}
            currentPerformance={currentPerformance}
            setCurrentPerformance={setCurrentPerformance}
            isOpen={
              width > maxMobileWidth ? true : currentPerformance === index
            }
            index={index}
            isLast={TestArr.length - 1 === index}
          />
        ))}
      </PerformancesWrap>
    </Wrap>
  );
};

export default TheaterPoster;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14vh 4vw 0;
  width: 100vw;

  @media (max-width: 960px) {
    padding: 0 4vw;
  }
`;
const Description = styled.span`
  font-family: "namu-1750";
  font-size: 3.2vh;
  line-height: 4.6vh;
  color: #b5b5b5;
  width: 54vw;
  padding: 4vh 14vw 0 0;
  margin-left: auto;
  @media (max-width: 960px) {
    width: 86vw;
    margin-left: 6vw;
  }
`;
const PerformancesWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  text-transform: uppercase;
  font-family: "namu-pro";
  font-size: 24vh;
  margin-left: -1vw;
  margin-top: -3vh;
  color: #fff;
  @media (max-width: 960px) {
    margin-top: 1vh;
    font-size: 6vh;
    margin-left: 0;
  }
`;

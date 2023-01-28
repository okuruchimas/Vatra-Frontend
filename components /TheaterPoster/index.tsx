import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import Performance from "./Performance";
import { PerformanceProps } from "./performances";

const TheaterPoster = ({ performances }: PerformanceProps) => {
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
            mobileColor={performance.mobileColor}
            performancesLength={performances.length}
            index={index}
          />
        ))}
      </PerformancesWrap>
    </Wrap>
  );
};

export default TheaterPoster;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8vh;
  padding: 6vh 4vw 0;
  width: 100vw;

  @media (max-width: 960px) {
    margin-top: 4vh;
    padding: 6vh 4vw;
  }
`;
const Description = styled.span`
  font-family: "namu-1750";
  font-size: 3.2vh;
  line-height: 4.6vh;
  color: #a7a5a5;
  width: 55vw;
  padding: 4vh 14vw 0 0;
  margin-left: auto;
  @media (max-width: 1600px) {
    width: 54vw;
  }

  @media (max-width: 960px) {
    width: 94vw;
    margin-left: 8vw;
    font-size: 2vh;
    line-height: 136%;
  }
`;
const PerformancesWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    flex-direction: initial;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 12vh;
  }
`;

const Title = styled.span`
  text-transform: uppercase;
  font-family: "namu-pro";
  font-size: 24vh;
  margin-left: -1vw;
  margin-top: -3vh;
  color: #fff;

  @media (max-width: 960px) {
    font-family: "namu-1400";
    margin-top: 3vh;
    font-size: 3em;
    margin-left: 0;
  }
`;

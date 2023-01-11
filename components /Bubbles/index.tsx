import styled from "@emotion/styled";
import Bubble from "./Bubble";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Bubbles = () => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Title>наші цінноcті</Title>
      <BubblesWrap>
        <Bubble
          size={width > maxMobileWidth ? 20 : 32}
          animationTime={5}
          top={width > maxMobileWidth ? 8 : 20}
          left={width > maxMobileWidth ? 26 : 60}
          text="Актуальність"
        />

        <Bubble
          size={width > maxMobileWidth ? 18.6 : 30}
          animationTime={7}
          top={width > maxMobileWidth ? 6 : 44}
          right={width > maxMobileWidth ? 8 : 24}
          text="Підтримка та розвиток"
        />

        {width > maxMobileWidth && (
          <Bubble
            size={22}
            animationTime={7.7}
            top={32}
            right={28}
            text="Мультидисциплінарність"
          />
        )}

        <Bubble
          size={width > maxMobileWidth ? 16 : 40}
          animationTime={8}
          top={width > maxMobileWidth ? 52 : 24}
          left={width > maxMobileWidth ? 28 : 4}
          text="Любов і свобода самовираження"
        />

        <Bubble
          size={width > maxMobileWidth ? 16 : 36}
          animationTime={8}
          top={width > maxMobileWidth ? 44 : 4}
          left={width > maxMobileWidth ? 4 : 28}
          text="Повага до свого коріння"
        />
      </BubblesWrap>
    </Wrap>
  );
};

export default Bubbles;

const Wrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8vh 4vw 0;
  width: 100vw;

  @media (max-width: 960px) {
    padding: 6vh 4vw 0;
  }
`;
export const Title = styled.span`
  text-transform: uppercase;
  font-family: "namu-1600";
  font-size: 11vh;

  @media (max-width: 960px) {
    font-size: 4vh;
    max-width: 92vw;
  }
`;

const BubblesWrap = styled.div`
  position: relative;
  width: 100vw;
  padding: 4vw 8vw;
  min-height: 52vw;

  @media (max-width: 960px) {
    width: 100%;
    padding: 4vw 0;
    min-height: 56vh;
  }
`;

import styled from "@emotion/styled";
import Bubble from "./Bubble";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Bubbles = () => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Title>наші цінності</Title>
      <BubblesWrap>
        <Bubble
          size={width > maxMobileWidth ? 19.6 : 32}
          animationTime={5}
          top={width > maxMobileWidth ? 6 : 20}
          left={width > maxMobileWidth ? 28 : 62}
          text="Актуальність"
        />
        <Bubble
          size={width > maxMobileWidth ? 18.6 : 30}
          animationTime={7}
          top={width > maxMobileWidth ? 2 : 40}
          right={width > maxMobileWidth ? 16 : 24}
          text="Підтримка та розвиток"
        />

        {width > maxMobileWidth && (
          <Bubble
            size={16}
            animationTime={7.7}
            top={40}
            right={28}
            text="Мультидисциплінарність"
          />
        )}

        <Bubble
          size={width > maxMobileWidth ? 20 : 40}
          animationTime={8}
          top={width > maxMobileWidth ? 52 : 24}
          left={width > maxMobileWidth ? 34 : 4}
          text="Любов і свобода самовираження"
        />
        <Bubble
          size={width > maxMobileWidth ? 16 : 36}
          animationTime={8}
          top={width > maxMobileWidth ? 36 : 4}
          left={width > maxMobileWidth ? 12 : 28}
          text="Повага до свого коріня"
        />
      </BubblesWrap>
    </Wrap>
  );
};

export default Bubbles;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8vh 0 0;
  width: 100vw;
  @media (max-width: 960px) {
    padding: 6vh 0 0;
  }
`;
export const Title = styled.span`
  max-width: 60vw;
  padding-left: 4vw;
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 8vh;
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
    min-height: 56vh;
  }
`;

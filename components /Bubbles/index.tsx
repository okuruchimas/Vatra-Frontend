import styled from "@emotion/styled";
import Bubble from "./Bubble";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Bubbles = () => {
  const { isDesktopWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Title>наші цінноcті</Title>
      <BubblesWrap>
        <Bubble
          size={isDesktopWidth ? 20 : 28}
          animationTime={5}
          top={isDesktopWidth ? 8 : 12}
          left={isDesktopWidth ? 26 : 64}
          text="Актуальність"
        />

        <Bubble
          size={isDesktopWidth ? 18.6 : 30}
          animationTime={7}
          top={isDesktopWidth ? 6 : 26}
          right={isDesktopWidth ? 8 : 20}
          text="Підтримка та розвиток"
        />

        {isDesktopWidth && (
          <Bubble
            size={22}
            animationTime={7.7}
            top={32}
            right={28}
            text="Мультидисциплінарність"
          />
        )}

        <Bubble
          size={isDesktopWidth ? 16 : 36}
          animationTime={8}
          top={isDesktopWidth ? 52 : 20}
          left={isDesktopWidth ? 28 : 0}
          text="Любов і свобода самовираження"
        />

        <Bubble
          size={isDesktopWidth ? 16 : 32}
          animationTime={8}
          top={isDesktopWidth ? 44 : 4}
          left={isDesktopWidth ? 4 : 28}
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
    min-height: 40vh;
  }
`;

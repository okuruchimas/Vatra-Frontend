import styled from "@emotion/styled";
import Bubble from "./Bubble";

const Bubbles = () => {
  return (
    <Wrap>
      <Title>наші цінності</Title>
      <BubblesWrap>
        <Bubble
          size={19.6}
          animationTime={5}
          top={6}
          left={28}
          text="Актуальність"
        />
        <Bubble
          size={18.6}
          animationTime={7}
          top={2}
          right={16}
          text="Підтримка та розвиток"
        />

        <Bubble
          size={16}
          animationTime={7.7}
          top={40}
          right={28}
          text="Мультидисциплінарність"
        />

        <Bubble
          size={20}
          animationTime={8}
          top={52}
          left={34}
          text="Любов і свобода самовираження"
        />
        <Bubble
          size={16}
          animationTime={8}
          top={36}
          left={12}
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
`;

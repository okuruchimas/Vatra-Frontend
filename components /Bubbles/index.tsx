import styled from "@emotion/styled";
import {
  BlueGradient,
  PurpleGradient,
  SkyGradient,
  YellowGradient,
} from "../layout/Gradients";
import Bubble from "./Bubble";

const Bubbles = () => {
  return (
    <Wrap>
      <BlueGradient size={8} animationTime={6} right={36} top={2} />
      <Title>наші цінності</Title>
      <BubblesWrap>
        <YellowGradient size={8} animationTime={8} left={1} top={28} />
        <SkyGradient size={20} animationTime={4} right={-4} top={40} />
        <PurpleGradient size={24} animationTime={4} left={-8} top={74} />

        <Bubble size={19.6} top={6} left={28} text="Актуальність" />
        <Bubble size={18.6} top={2} right={16} text="Підтримка та розвиток" />

        <Bubble size={19.2} top={40} right={28} text="Мультидисциплінарність" />

        <Bubble size={14} top={52} left={34} text="Любов і свобода самовираження" />
        <Bubble size={16} top={36} left={12} text="Повага до свого коріня" />

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
`;
const Title = styled.span`
  max-width: 60vw;
  padding-left: 6vw;
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 8vh;
  color: #bbbbbb;
`;

const BubblesWrap = styled.div`
  position: relative;
  width: 100vw;
  padding: 4vw 8vw;
  min-height: 52vw;
`;

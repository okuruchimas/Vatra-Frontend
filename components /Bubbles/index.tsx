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
        <Bubble size={300} text="Actuality" />
        {/*<Rotate>*/}
        {/*  <BubbleWrap size={300}>*/}
        {/*    <Bubble>*/}
        {/*      <TextSpan1 />*/}
        {/*    </Bubble>*/}
        {/*  </BubbleWrap>*/}
        {/*  <BubbleWrap size={260}>*/}
        {/*    <Bubble>*/}
        {/*      <TextSpan2 />*/}
        {/*    </Bubble>*/}
        {/*  </BubbleWrap>*/}
        {/*</Rotate>*/}
        {/*<SecondRotate>*/}
        {/*  <BubbleWrap size={240}>*/}
        {/*    <Bubble>*/}
        {/*      <TextSpan3 />*/}
        {/*    </Bubble>*/}
        {/*  </BubbleWrap>*/}
        {/*  <BubbleWrap size={280}>*/}
        {/*    <Bubble>*/}
        {/*      <TextSpan4 />*/}
        {/*    </Bubble>*/}
        {/*  </BubbleWrap>*/}
        {/*</SecondRotate>*/}
        {/*<ThirdRotate>*/}
        {/*  <BubbleWrap size={240}>*/}
        {/*    <Bubble>*/}
        {/*      <TextSpan5 />*/}
        {/*    </Bubble>*/}
        {/*  </BubbleWrap>*/}
        {/*</ThirdRotate>*/}
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
  margin-bottom: 4vh;
`;

const BubblesWrap = styled.div`
  width: 100vw;
  padding: 2vw 8vw;
  min-height: 72vw;
`;

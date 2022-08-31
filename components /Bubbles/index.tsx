import styled from "@emotion/styled";

const Bubbles = () => {
  return (
    <Wrap>
      <Title>наші цінності</Title>
      <BubbleWrap>
        <Stage>
          <Circle />
        </Stage>
      </BubbleWrap>
    </Wrap>
  );
};

export default Bubbles;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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

const BubbleWrap = styled.div`
  width: 100%;
`;

const Stage = styled.section`
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -ms-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px;
  -webkit-perspective-origin: 50% 50%;
  -moz-perspective-origin: 50% 50%;
  -ms-perspective-origin: 50% 50%;
  -o-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
`;

const Circle = styled.figure`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: relative;

  //background: radial-gradient(
  //  circle at bottom,
  //  #81e8f6,
  //  #76deef 10%,
  //  #055194 80%,
  //  #062745 100%
  //);

  background: radial-gradient(
    circle at 50% 55%,
    rgba(240, 245, 255, 0.9),
    rgba(240, 245, 255, 0.9) 40%,
    rgba(225, 238, 255, 0.8) 60%,
    rgba(43, 130, 255, 0.4)
  );
  -webkit-animation: bubble-anim 2s ease-out infinite;
  animation: bubble-anim 2s ease-out infinite;
  &:before {
    content: "";
    position: absolute;
    top: 1%;
    left: 5%;
    //width: 90%;
    //height: 90%;
    border-radius: 100%;
    //background: radial-gradient(
    //  circle at top,
    //  white,
    //  rgba(255, 255, 255, 0) 58%
    //);
    //-webkit-filter: blur(5px);
    //filter: blur(5px);
    z-index: 2;

    -webkit-filter: blur(0);
    filter: blur(0);
    height: 80%;
    width: 40%;
    background: radial-gradient(
      circle at 130% 130%,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 46%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.8) 58%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    -webkit-transform: translateX(131%) translateY(58%) rotateZ(168deg)
      rotateX(10deg);
    transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
  }
  &:after {
    content: "";
    position: absolute;
    //display: none;
    top: 5%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    -webkit-filter: blur(1px);
    filter: blur(1px);
    z-index: 2;
    -webkit-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg);

    display: block;
    background: radial-gradient(
      circle at 50% 80%,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0) 74%,
      white 80%,
      white 84%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @keyframes bubble-anim {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    20% {
      -webkit-transform: scaleY(0.95) scaleX(1.05);
      transform: scaleY(0.95) scaleX(1.05);
    }

    48% {
      -webkit-transform: scaleY(1.1) scaleX(0.9);
      transform: scaleY(1.1) scaleX(0.9);
    }

    68% {
      -webkit-transform: scaleY(0.98) scaleX(1.02);
      transform: scaleY(0.98) scaleX(1.02);
    }

    80% {
      -webkit-transform: scaleY(1.02) scaleX(0.98);
      transform: scaleY(1.02) scaleX(0.98);
    }

    97%,
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
const Shadow = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0) 50%
  );
  transform: rotateX(90deg) translateZ(-150px);
  z-index: 2;
`;

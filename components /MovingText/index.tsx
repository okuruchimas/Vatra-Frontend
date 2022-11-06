import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";

const MovingText = () => {
  return (
    <SliderWrap>
      <SliderTrackWhite></SliderTrackWhite>

      <SliderTrackRed></SliderTrackRed>
      <SliderTrackWhite></SliderTrackWhite>
    </SliderWrap>
  );
};

export default MovingText;
const SliderWrap = styled.div`
  margin: 22vh;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const SliderTrack = styled.div`
  display: flex;
  width: calc(64vw * 4);
`;
const SliderTrackWhite = styled(SliderTrack)`
  animation: text-scroll-right 8s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes text-scroll-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-64vw * 2));
    }
  } ;
`;
const SliderTrackRed = styled(SliderTrack)`
  animation: text-scroll-left 12s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes text-scroll-left {
    0% {
      transform: translateX(calc(-64vw * 2));
    }
    100% {
      transform: translateX(0);
    }
  } ;
`;

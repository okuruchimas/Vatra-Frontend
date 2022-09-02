import styled from "@emotion/styled";
import BigTitle from "../layout/BigTitle";

const MovingText = () => {
  return (
    <SliderWrap>
      <SliderTrackWhite>
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
      </SliderTrackWhite>

      <SliderTrackRed>
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
      </SliderTrackRed>
      <SliderTrackWhite>
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
      </SliderTrackWhite>
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

import styled from "@emotion/styled";
import BigTitle from "../layout/BigTitle";

const MovingText = () => {
  return (
    <SliderWrap>
      <SliderTrack>
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
      </SliderTrack>

      <SliderTrack2>
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
        <BigTitle textBefore="Theatre" textAfter="varta " />
      </SliderTrack2>
      <SliderTrack>
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
        <BigTitle textBefore="Theatre" textAfter="varta " isGray />
      </SliderTrack>
    </SliderWrap>
  );
};

export default MovingText;
const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const SliderTrack = styled.div`
  display: flex;
  width: calc(40vw * 16);
  animation: scroll-right-text 12s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes scroll-right-text {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-40vw * 8));
    }
  } ;
`;

const SliderTrack2 = styled.div`
  display: flex;
  width: calc(40vw * 16);
  animation: scroll-left-text 14s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes scroll-left-text {
    0% {
      transform: translateX(calc(-40vw * 8));
    }
    100% {
      transform: translateX(0);
    }
  } ;
`;

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
  width: calc(72vw * 6);
  animation: scroll 12s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-72vw * 3));
    }
  } ;
`;

const SliderTrack2 = styled.div`
  display: flex;
  width: calc(72vw * 6);
  animation: scroll-left 14s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes scroll-left {
    0% {
      transform: translateX(calc(-72vw * 3));
    }
    100% {
      transform: translateX(0);
    }
  } ;
`;

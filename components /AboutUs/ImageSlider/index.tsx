import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
  slides: { link: string }[];
};

const ImageSlider = ({ slides }: Props) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const previousSlideId = currentId === 0 ? slides.length - 1 : currentId - 1;
  const nextSlideId = currentId === slides.length - 1 ? 0 : currentId + 1;

  return (
    <Wrap>
      <PreviousSlide
        onClick={() => setCurrentId(previousSlideId)}
        style={{ backgroundImage: `url(${slides[previousSlideId].link})` }}
      ></PreviousSlide>
      <CurrentSlide
        style={{ backgroundImage: `url(${slides[currentId].link})` }}
      ></CurrentSlide>
      <NextSlide
        onClick={() => setCurrentId(nextSlideId)}
        style={{ backgroundImage: `url(${slides[nextSlideId].link})` }}
      ></NextSlide>
      <Pagination>
        <Number onClick={() => setCurrentId(previousSlideId)}>
          {previousSlideId + 1}
        </Number>
        <LoadingLine />
        <Number onClick={() => setCurrentId(nextSlideId)}>
          {nextSlideId + 1}
        </Number>
      </Pagination>
    </Wrap>
  );
};

export default ImageSlider;

const Wrap = styled.div`
  height: 100%;
  position: relative;
  color: #ffffff;
`;
const CurrentSlide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
`;

const Img = styled(CurrentSlide)`
  height: 80%;
  width: 80%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  opacity: 0.4;
`;

const PreviousSlide = styled(Img)`
  left: -30vw;
`;
const NextSlide = styled(Img)`
  right: -30vw;
  //animation: test 0.2s linear;
  //
  //@keyframes test {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(-8vw);
  //  }
  //} ;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vh;

  padding: 4vh 0;
`;
const LoadingLine = styled.div`
  width: 6vw;
  margin: 0 1vw;
  height: 1px;
  border-radius: 24px;
  background: #bbbbbb;

  &:before {
    display: block;
    position: relative;
    content: "";
    bottom: 1px;
    height: 3px;
    width: 0;
    border-radius: 24px;
    background: #ffffff;
    animation: loading-line 3s linear infinite;
  }
  @keyframes loading-line {
    0% {
      left: 6vw;
      width: 0;
    }
    20% {
      left: 4.8vw;
      width: 1.2vw;
    }
    40% {
      left: 3.6vw;
      width: 2.4vw;
    }
    60% {
      left: 2.4vw;
      width: 3.6vw;
    }
    80% {
      left: 1.2vw;
      width: 4.8vw;
    }
    100% {
      left: 0;
      width: 6vw;
    }
  } ;
`;

const Number = styled.span`
  font-family: "namu-1750";
  font-size: 3vh;
  margin: 0 0.4vw;
  align-self: center;
  cursor: pointer;
`;

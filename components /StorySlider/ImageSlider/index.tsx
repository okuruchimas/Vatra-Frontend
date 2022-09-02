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
        {/*{slides.map((slide, slideId) => (*/}
        {/*  <Dot key={slideId} onClick={() => setCurrentId(slideId)}>*/}
        {/*    &#183;*/}
        {/*  </Dot>*/}
        {/*))}*/}
        <Number onClick={() => setCurrentId(previousSlideId)}>
          {previousSlideId + 1}
        </Number>
        <CurrentNumber>
          &#183;&#183;&#183; {currentId + 1} &#183;&#183;&#183;
        </CurrentNumber>
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
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4vh;

  padding: 4vh 0;
`;
const Dot = styled.div`
  font-size: 12vh;
  line-height: 4vh;
  margin: 0 0.8vw;
  cursor: pointer;
`;
const CurrentNumber = styled.span`
  font-size: 3vh;
  margin: 0 0.4vw;
  align-self: center;
`;
const Number = styled(CurrentNumber)`
  font-size: 2.6vh;
  margin: 0 0.4vw;
  cursor: pointer;
  opacity: 0.4;
  align-self: center;
`;

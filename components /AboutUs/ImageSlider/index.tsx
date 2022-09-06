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
      <Slider>
        {slides.map(({ link }, index) => (
          <TestSpan key={index} index={index + 1}>
            <ImgTest src={link} />
          </TestSpan>
        ))}
      </Slider>

      {/*<Pagination>*/}
      {/*  <Number onClick={() => setCurrentId(previousSlideId)}>*/}
      {/*    {previousSlideId + 1}*/}
      {/*  </Number>*/}
      {/*  <LoadingLine />*/}
      {/*  <Number onClick={() => setCurrentId(nextSlideId)}>*/}
      {/*    {nextSlideId + 1}*/}
      {/*  </Number>*/}
      {/*</Pagination>*/}
    </Wrap>
  );
};

export default ImageSlider;

const Wrap = styled.div`
  margin: 20vh 0;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: #ffffff;
`;

const Slider = styled.div`
  position: relative;

  width: 18vw;
  height: 44vh;
  transform-style: preserve-3d;
  animation: rotate-photo 30s linear infinite;

  @keyframes rotate-photo {
    0% {
      transform: perspective(2000px) rotateY(0deg);
    }
    100% {
      transform: perspective(2000px) rotateY(360deg);
    }
  }
`;
const TestSpan = styled.span<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 18vw;
  height: 44vh;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(${({ index }) => index} * 45deg)) translateZ(40vw);

  &:hover {
    img {
      transform: translateY(-50px) scale(1.2);
    }
  }
`;
const ImgTest = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 18vw;
  height: 44vh;
  border-radius: 24px;
  object-fit: cover;
  transition: 2s;
  cursor: pointer;
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

import styled from "@emotion/styled";
import { PhotoSliderProps } from "./slides";
import { keyframes } from "@emotion/react";

const PhotoSlider = ({ slides }: PhotoSliderProps) => {
  return (
    <Slider>
      <SliderTrack>
        {slides.map(({ url }) => (
          <Slide key={url}>
            <Img src={url} />
          </Slide>
        ))}
        {slides.map(({ url }, index) => (
          <Slide key={index}>
            <Img src={url} />
          </Slide>
        ))}
      </SliderTrack>
    </Slider>
  );
};

export default PhotoSlider;

const Slider = styled.section`
  position: relative;
  margin: auto;
  width: 100%;
  overflow: hidden;
  padding: 40vh 0 6vh;
  @media (max-width: 960px) {
    padding: 4vh 0;
  }
`;

const photoScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-24vw * 6));
  }
`;

const photoScrollMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  
  100% {
    transform: translateX(calc(-40vw * 6));
  }
`;

const SliderTrack = styled.div`
  animation: ${photoScroll} 24s linear infinite;
  display: flex;
  width: calc(24vw * 12);

  div:nth-of-type(even) {
    bottom: 12vh;
    transform: rotate(5deg);
    @media (max-width: 960px) {
      z-index: 1;
      bottom: 10vh;
    }
  }

  @media (max-width: 960px) {
    animation: ${photoScrollMobile} 24s linear infinite;
    width: calc(40vw * 12);
    div:nth-of-type(odd) {
      transform: rotate(-5deg);
    }
  }
`;

const Slide = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 24vw;
  border-radius: 24px;
  @media (max-width: 960px) {
    border-radius: 10px;
    width: 40vw;
  }
`;

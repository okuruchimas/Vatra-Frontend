import styled from "@emotion/styled";

const TestArr = [
  {
    url: "/icons/slider/slider1.png",
  },
  {
    url: "/icons/slider/slider2.png",
  },
  {
    url: "/icons/slider/slider3.png",
  },
  {
    url: "/icons/slider/slider4.png",
  },
  {
    url: "/icons/slider/slider5.png",
  },
  {
    url: "/icons/slider/slider6.png",
  },
];
const PhotoSlider = () => {
  return (
    <Slider>
      <SliderTrack>
        {TestArr.map(({ url }) => (
          <Slide key={url}>
            <Img src={url} loading="lazy" />
          </Slide>
        ))}
        {TestArr.map(({ url }, index) => (
          <Slide key={index}>
            <Img src={url} loading="lazy" />
          </Slide>
        ))}
      </SliderTrack>
    </Slider>
  );
};

export default PhotoSlider;

const Slider = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  overflow: hidden;
  padding: 40vh 0 20vh;
`;
const SliderTrack = styled.div`
  animation: scroll 24s linear infinite;
  display: flex;
  width: calc(20vw * 12);
  div:nth-of-type(even) {
    bottom: 12vh;
    transform: rotate(16deg);
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-20vw * 6));
    }
  }
`;

const Slide = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 20vw;
  border-radius: 24px;
`;

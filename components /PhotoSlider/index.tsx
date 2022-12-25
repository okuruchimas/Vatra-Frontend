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
  padding: 40vh 0 6vh;
  @media (max-width: 960px) {
    padding: 16vh 0;
  }
`;
const SliderTrack = styled.div`
  animation: photo-scroll 24s linear infinite;
  display: flex;
  width: calc(24vw * 12);
  div:nth-of-type(even) {
    bottom: 12vh;
    transform: rotate(5deg);
    @media (max-width: 960px) {
      bottom: 8vh;
    }
  }

  @media (max-width: 960px) {
    width: calc(32vw * 12);
  }

  @keyframes photo-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-24vw * 6));
      @media (max-width: 960px) {
        transform: translateX(calc(-32vw * 6));
      }
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
    width: 32vw;
  }
`;

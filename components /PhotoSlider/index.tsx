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
    <Wrap>
      <SliderTrack>
        {TestArr.map(({ url }) => (
          <ImgWrap key={url}>
            <Img src={url} loading="lazy" />
          </ImgWrap>
        ))}
        {TestArr.map(({ url }, index) => (
          <ImgWrap key={index}>
            <Img src={url} loading="lazy" />
          </ImgWrap>
        ))}
      </SliderTrack>
    </Wrap>
  );
};

export default PhotoSlider;

const Wrap = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  display: grid;
  place-items: center;
  //display: flex;
  //flex-direction: row;
  //align-items: center;
  overflow: hidden;
  padding: 20vh 0;
`;
const SliderTrack = styled.div`
  display: flex;
  width: calc(20vw * 12);
  animation: scroll 16s linear infinite;
  div:nth-of-type(even) {
    margin-bottom: 12vh;
    transform: rotate(16deg);
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-20vw * 6));
    }
  } ;
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  perspective: 100px;
`;
const Img = styled.img`
  width: 20vw;
  transition: transform 1s;
  align-self: flex-end;
  border-radius: 24px;
`;

import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "@emotion/styled";

interface Props {
  images: string[];
}
const PerformancePhotos = ({ images }: Props) => {
  const { isDesktop } = useWindowDimensions();

  return isDesktop ? (
    <PhotosWrap>
      <Photo link={images[0]} />
      <SecondPhoto link={images[1]} />
      <ThirdPhoto link={images[2]} />
    </PhotosWrap>
  ) : (
    <Container
      slidesPerView={"auto"}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {images.map((item) => (
        <Slide key={item}>
          <Photo link={item} />
        </Slide>
      ))}
    </Container>
  );
};

export default PerformancePhotos;

const PhotosWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 55%;
  height: 100vh;
  @media (max-width: 960px) {
    width: 100%;
    height: auto;
  }
`;
const Container = styled(Swiper)`
  width: 100vw;
  margin-left: -4vw;
  padding: 50px 0;
`;

const Slide = styled(SwiperSlide)`
  //background-position: center;
  //background-size: cover;
  width: 280px !important;
  margin-left: 4vw;
  //height: 300px;
  //background: #000;
`;

const Photo = styled.div<{ link: string }>`
  height: 80vh;
  background-image: ${({ link }) => `url(${link})`};
  border-radius: 12px;
  background-size: cover;
  aspect-ratio: 600/900;
  background-position: center;

  position: relative;
  left: 4vw;
  bottom: 12vh;
  transform: rotate(-6deg);
  z-index: 1;
  @media (max-width: 960px) {
    position: initial;
    transform: rotate(0);
    width: 280px;
    height: 260px;
    aspect-ratio: 280/260;
  }
`;

const SecondPhoto = styled(Photo)`
  left: -16vw;
  bottom: -8vh;
  transform: rotate(0);
  z-index: 2;
`;

const ThirdPhoto = styled(Photo)`
  left: -40vw;
  bottom: -24vh;
  transform: rotate(6deg);
  z-index: 3;
`;

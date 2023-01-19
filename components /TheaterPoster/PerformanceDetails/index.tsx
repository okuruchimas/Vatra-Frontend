import React from "react";
import RedTitle from "../../layout/RedTitle";
import { TitleFragment } from "../../AboutUs";
import parse from "html-react-parser";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, FreeMode, Pagination } from "swiper";

type Props = {
  bigTitle1: string;
  bigTitle2?: string;
  smallTitle: string;
  description: string;
  images: string[];
};

const PerformanceDetail = ({
  bigTitle1,
  bigTitle2,
  smallTitle,
  description,
  images,
}: Props) => {
  return (
    <Wrap>
      <RedTitle text="опис  вистави" />
      <TitleFragment marginTop={2}>{bigTitle1}</TitleFragment>
      {bigTitle2 && <TitleFragment last>{bigTitle2}</TitleFragment>}
      <InfoWrap>
        <DescriptionWrap>
          <DescriptionTitle>{parse(smallTitle)}</DescriptionTitle>
          <Description>{parse(description)}</Description>
        </DescriptionWrap>
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
        <PhotosWrap>
          <Photo link={images[0]} />
          <SecondPhoto link={images[1]} />
          <ThirdPhoto link={images[2]} />
        </PhotosWrap>
      </InfoWrap>
    </Wrap>
  );
};

export default PerformanceDetail;

const Wrap = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    margin-top: 18vh;
    background: rgba(158, 145, 145, 0.16);
    border-radius: 30px;
    padding: 4vh 4vw;
    width: 100vw;
    margin-left: -4vw;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 28vh;
  @media (max-width: 960px) {
    margin-top: 8vh;
    flex-direction: column;
  }
`;

const DescriptionWrap = styled.div`
  width: 45%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const DescriptionTitle = styled.span`
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 4.4vh;
  color: #fff;
  @media (max-width: 960px) {
    font-size: 1.4em;
  }
`;

const Description = styled.div`
  padding: 4vh 4vw 0;

  p {
    font-family: "namu-1750";
    font-size: 2.4vh;
    padding-left: 2vw;
    color: #cecece;
    @media (max-width: 960px) {
      font-size: 1.8vh;
      padding: 0 6vw;
    }
  }
`;

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

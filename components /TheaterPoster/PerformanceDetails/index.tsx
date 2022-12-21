import React from "react";
import RedTitle from "../../layout/RedTitle";
import { TitleFragment } from "../../AboutUs";
import parse from "html-react-parser";
import { ArrowRight } from "../../OurTeam";
import { Circle } from "../../JoinUs";
import styled from "@emotion/styled";

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
      <TitleFragment>{bigTitle1}</TitleFragment>
      {bigTitle2 && <TitleFragment last>{bigTitle2}</TitleFragment>}
      <InfoWrap>
        <DescriptionWrap>
          <DescriptionTitle>{smallTitle}</DescriptionTitle>
          <Description>{parse(description)}</Description>
          <Button>
            <ArrowRight src="/icons/arrows/arrowRight.svg" />
            <Circle isEmpty />
          </Button>
        </DescriptionWrap>
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
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    margin-top: 20vh;
    background: rgba(158, 145, 145, 0.16);
    border-radius: 30px;
    padding: 8vh 4vw;
    width: 100vw;
    margin-left: -4vw;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12vh;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const DescriptionWrap = styled.div`
  width: 38%;
  @media (max-width: 960px) {
    width: 86%;
  }
`;

const DescriptionTitle = styled.span`
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 4vh;
  color: #fff;
  @media (max-width: 960px) {
    font-size: 1.4em;
  }
`;

const Description = styled.div`
  padding-top: 4vh;

  p {
    font-family: "namu-1750";
    font-size: 2.4vh;
    padding: 0 2vw;
    color: #b5b5b5;
    @media (max-width: 960px) {
      padding: 0 6vw;
    }
  }
`;
const Button = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: min-content;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    img {
      transform: translatex(32px);
      z-index: 1;
    }
  }
  @media (max-width: 960px) {
    display: none;
  }
`;

const PhotosWrap = styled.div`
  position: relative;
  width: 62%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const Photo = styled.div<{ link: string }>`
  width: 28vw;
  background-image: ${({ link }) => `url(${link})`};
  border-radius: 12px;
  background-size: cover;
  aspect-ratio: 600/900;
  background-position: center;

  position: absolute;
  left: 8vw;
  bottom: -4vh;
  transform: rotate(-6deg);
  z-index: 3;
  @media (max-width: 960px) {
    position: initial;
    transform: rotate(0);
    width: 68vw;
    aspect-ratio: 280/260;
  }
`;

const SecondPhoto = styled(Photo)`
  left: 18vw;
  bottom: 10vh;
  transform: rotate(-0.5deg);
  z-index: 2;
`;

const ThirdPhoto = styled(Photo)`
  left: 26vw;
  bottom: 28vh;
  transform: rotate(6deg);
  z-index: 1;
`;

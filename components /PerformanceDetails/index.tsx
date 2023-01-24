import React from "react";
import RedTitle from "../layout/RedTitle";
import { TitleFragment } from "../AboutUs";
import parse from "html-react-parser";
import styled from "@emotion/styled";
import PerformancePhotos from "./performancePhotos";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props {
  bigTitle1: string;
  bigTitle2?: string;
  smallTitle: string;
  description: string;
  images: string[];
}

const PerformanceDetail = ({
  bigTitle1,
  bigTitle2,
  smallTitle,
  description,
  images,
}: Props) => {
  const { isDesktopWidth } = useWindowDimensions();

  return (
    <Wrap>
      <RedTitle text="опис  вистави" />
      <TitleFragment marginTop={isDesktopWidth ? 2 : 1}>
        {bigTitle1}
      </TitleFragment>
      {bigTitle2 && (
        <TitleFragment marginTop={isDesktopWidth ? 0 : -2} last>
          {bigTitle2}
        </TitleFragment>
      )}
      <InfoWrap>
        <DescriptionWrap>
          <DescriptionTitle>{parse(smallTitle)}</DescriptionTitle>
          <Description>{parse(description)}</Description>
        </DescriptionWrap>
        <PerformancePhotos images={images} />
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
    background: rgba(203, 101, 101, 0.11);
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
    margin-top: 7vh;
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
    font-size: 2.4vh;
  }
`;

const Description = styled.div`
  padding: 4vh 4vw 0;
  @media (max-width: 960px) {
    padding-top: 1vh;
  }
  p {
    font-family: "namu-1750";
    font-size: 2.4vh;
    padding-left: 2vw;
    color: #b3b3b3;
    @media (max-width: 960px) {
      font-size: 1.8vh;
      padding: 0 6vw;
    }
  }
`;

import React from "react";
import RedTitle from "../layout/RedTitle";
import { TitleFragment } from "../AboutUs";
import parse from "html-react-parser";
import styled from "@emotion/styled";
import PerformancePhotos from "./performancePhotos";

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

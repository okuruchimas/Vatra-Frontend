import styled from "@emotion/styled";
import Button from "../../layout/Button";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import Repertoire from "../../../pages/[id]";
import { RepertoireProps } from "./index";

type Props = {
  imgUrl: string;
  type: string;
  date: string;
  left: number;
  title?: string;
};

const PerformanceImg = ({ imgUrl, type, date, left, title }: Props) => {
  return (
    <ImgBlock>
      <Img src={imgUrl} loading="lazy" left={left} />
      <Type left={left}>{type}</Type>
      <OpenIcon src="/icons/arrows/triangle.svg" />
      <DateText left={left}>{date}</DateText>
    </ImgBlock>
  );
};

export default PerformanceImg;

const ImgBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 4vw;
  @media (max-width: 960px) {
    width: 92vw;
    padding-right: 0;
  }
`;

const Img = styled.img<{ left: number }>`
  width: 50vw;
  object-fit: cover;
  border-radius: 16px;
  aspect-ratio: 193/180;
  margin-left: ${({ left }) => (left ? "auto" : "none")};
  @media (max-width: 960px) {
    margin-left: inherit;
    margin-top: 12vh;
    width: 91.6vw;
  }
`;

const OpenIcon = styled.img`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    position: absolute;
    right: 6vw;
    height: 6vh;
    top: 3vh;
    align-items: center;
  }
`;

const DateText = styled.span<{ left: number }>`
  position: absolute;
  right: ${({ left }) => (left ? "0" : "auto")};
  left: ${({ left }) => (left ? "auto" : "-4vw")};
  bottom: -11vh;
  font-family: "namu-1750";
  font-size: 20vw;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  @media (max-width: 960px) {
    font-family: "murmure";
    font-size: 4vh;
    -webkit-text-fill-color: inherit;
    -webkit-text-stroke-width: inherit;
    right: inherit;
    left: 34vw;
    height: 6vh;
    bottom: 5vh;
    &::before {
      content: "/";
      margin-right: 1vw;
    }
  }
`;

export const Type = styled.span<{ left?: number }>`
  text-transform: uppercase;
  width: max-content;
  color: #fff;
  font-family: "namu-1750";
  font-size: 1.6vh;
  padding: 1vh 1vw;
  background: inherit;
  border-radius: 24px;
  border: 1px solid #fff;
  position: absolute;
  left: ${({ left }) => (left ? "inherit" : "2vw")};
  right: ${({ left }) => (left ? "6vw" : "inherit")};
  top: 2vh;

  @media (max-width: 960px) {
    right: inherit;
    left: 6vw;
    top: 4vh;
  }
`;

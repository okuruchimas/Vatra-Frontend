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
};

const PerformanceImg = ({ imgUrl, type, date, left }: Props) => {
  return (
    <ImgBlock>
      <Img src={imgUrl} loading="lazy" left={left} />
      <Type left={left}>{type}</Type>
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
`;

const Img = styled.img<{ left: number }>`
  width: 50vw;
  object-fit: cover;
  border-radius: 16px;
  aspect-ratio: 193/180;
  margin-left: ${({ left }) => (left ? "auto" : "none")};
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
`;

const Type = styled.span<{ left: number }>`
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
`;

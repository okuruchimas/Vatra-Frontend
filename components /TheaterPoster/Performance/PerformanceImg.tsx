import styled from "@emotion/styled";
import { Details, Dot, Title as Prop } from "./PerormanceInfo";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";

type Props = {
  imgUrl: string;
  type: string;
  date: string;
  left: number;
  title?: string;
  isDesktop?: boolean;
  link?: string;
  isCentered?: boolean;
};

const PerformanceImg = ({
  imgUrl,
  type,
  date,
  left,
  title,
  isDesktop,
  link,
  isCentered,
}: Props) => {
  const { push } = useRouter();
  return (
    <Wrap>
      {isDesktop ? (
        <>
          <Img src={imgUrl} left={left} />
          <Type left={left}>{type}</Type>
          <DateText left={left}>{date}</DateText>
        </>
      ) : (
        <MobileWrap>
          <Title>{title}</Title>
          <Type left={left} isCentered={isCentered}>
            {type}
          </Type>
          {link && (
            <Details onClick={() => push(link)} isCentered={isCentered}>
              <Dot src="/icons/arrows/redDot.svg" />
              Дізнатись більше
            </Details>
          )}
        </MobileWrap>
      )}
    </Wrap>
  );
};

export default PerformanceImg;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MobileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Title = styled(Prop)`
  padding: 0;
  font-size: 4.4vh;
  display: flex;
  align-items: center;
  text-align: left;
`;

const Img = styled.img<{ left: number }>`
  position: relative;
  top: 2vh;
  right: ${({ left }) => (left ? "2vh" : "initial")};
  left: ${({ left }) => (left ? "initial" : "2vh")};
  width: 50vw;
  object-fit: cover;
  border-radius: 16px;
  aspect-ratio: 193/180;
  margin-left: ${({ left }) => (left ? "auto" : "none")};
`;

export const DateText = styled.span<{ left: number }>`
  position: absolute;
  right: ${({ left }) => (left ? "-4vw" : "auto")};
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
    right: 8vw;
    height: 6vh;
    top: 16vh;
  }
`;

export const Type = styled.span<{ left?: number; isCentered?: boolean }>`
  text-transform: uppercase;
  width: max-content;
  color: #fff;
  font-family: "namu-1750";
  font-size: 1.6vh;
  padding: 1vh 2vw;
  background: inherit;
  border-radius: 24px;
  border: 1px solid #fff;
  position: absolute;
  left: ${({ left }) => (left ? "inherit" : "4vw")};
  right: ${({ left }) => (left ? "4vw" : "inherit")};
  top: 4vw;

  @media (max-width: 960px) {
    display: table-caption;
    position: initial;
    border: none;
    padding: ${({ isCentered }) => (isCentered ? "2vh 0 8vh" : "2vh 0")};
    color: #aeaeae;
    font-size: 0.8em;
    width: ${({ isCentered }) => (isCentered ? "36vw" : "44vw")};
  }
`;

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
};

const PerformanceImg = ({
  imgUrl,
  type,
  date,
  left,
  title,
  isDesktop,
  link,
}: Props) => {
  const { push } = useRouter();

  return (
    <Wrap>
      {isDesktop ? (
        <>
          <Img src={imgUrl} loading="lazy" left={left} />
          <Type left={left}>{type}</Type>
          <DateText left={left}>{date}</DateText>
        </>
      ) : (
        <MobileWrap>
          <Title>{title}</Title>
          <Type left={left}>{type}</Type>
          {link && (
            <Details onClick={() => push(link)}>
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
  @media (max-width: 960px) {
    //width: 92vw;
  }
`;

const MobileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Title = styled(Prop)`
  width: min-content;
  margin-left: 6vw;
  padding: 2vh 0;
`;

const Img = styled.img<{ left: number }>`
  position: relative;
  top: 2vh;
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
  right: ${({ left }) => (left ? "2vw" : "inherit")};
  top: 6vh;

  @media (max-width: 960px) {
    position: initial;
    right: inherit;
    left: 6vw;
    top: 5vh;
  }
`;

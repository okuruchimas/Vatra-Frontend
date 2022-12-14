import styled from "@emotion/styled";
import { Title as Prop } from "./PerormanceInfo";
import { Dispatch, SetStateAction } from "react";

type Props = {
  imgUrl: string;
  type: string;
  date: string;
  left: number;
  title?: string;
  isOpen?: boolean;
  setCurrentPerformance?: Dispatch<SetStateAction<number | undefined>>;
  currentPerformance?: number;
  index?: number;
};

const PerformanceImg = ({
  imgUrl,
  type,
  date,
  left,
  title,
  isOpen,
  setCurrentPerformance,
  index,
  currentPerformance,
}: Props) => {
  return (
    <Wrap>
      {isOpen ? (
        <>
          <Img src={imgUrl} loading="lazy" left={left} />
          {setCurrentPerformance && (!!index || index === 0) && (
            <OpenIcon
              isOpen={isOpen}
              src="/icons/arrows/triangle.svg"
              onClick={() => {
                if (currentPerformance === index) {
                  return setCurrentPerformance(undefined);
                }
                return setCurrentPerformance(index);
              }}
            />
          )}
          <Type left={left}>{type}</Type>
          <DateText left={left}>{date}</DateText>
        </>
      ) : (
        <>
          <Title>{title}</Title>
          {setCurrentPerformance && (!!index || index === 0) && (
            <OpenIcon
              src="/icons/arrows/triangle.svg"
              onClick={() => setCurrentPerformance(index)}
            />
          )}
        </>
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
  padding-right: 4vw;
  @media (max-width: 960px) {
    width: 92vw;
    padding-right: 0;
  }
`;
const Title = styled(Prop)`
  width: 80%;
  margin-left: 6vw;
  padding: 2vh 0;
`;

const Img = styled.img<{ left: number }>`
  width: 50vw;
  object-fit: cover;
  border-radius: 16px;
  aspect-ratio: 193/180;
  margin-left: ${({ left }) => (left ? "auto" : "none")};
  @media (max-width: 960px) {
    margin-left: inherit;
    margin-top: 14vh;
    width: 91.6vw;
  }
`;

const OpenIcon = styled.img<{ isOpen?: boolean }>`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    position: absolute;
    right: 6vw;
    height: 6vh;
    top: 4vh;
    align-items: center;
    z-index: 6;
    rotate: ${({ isOpen }) => (isOpen ? "180deg" : "none")};
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
    top: 5vh;
  }
`;

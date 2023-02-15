import React from "react";
import styled from "@emotion/styled";
import { Title as Prop } from "../TheaterPoster/Performance/PerormanceInfo";
import { Type as Prop2 } from "../TheaterPoster/Performance/PerformanceImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRouter } from "next/router";
import { keyframes } from "@emotion/react";
import { fadeIn, fadeInLeft, fadeInRight } from "react-animations";

interface Info {
  title: string;
  type: string;
  date: string;
  imgUrl: string;
  dates?: number[];
  isBuy: boolean;
  videoLink?: string;
  remarks: string[];
}

const fadeInAn = keyframes`${fadeIn}`;
const fadeInLAn = keyframes`${fadeInLeft}`;
const fadeInRAn = keyframes`${fadeInRight}`;

const RepertoirePreview = (info: Info) => {
  const { isDesktop } = useWindowDimensions();
  const { back } = useRouter();

  return (
    <Wrap>
      <Rate>16+</Rate>

      <Close onClick={() => back()}>
        <CloseIcon src={"/icons/close/close.svg"} />
      </Close>

      <TitleWrap>
        <Type>{info.type}</Type>
        <Title>{info.title}</Title>
      </TitleWrap>

      <Image alt="Preview" src={info.imgUrl} />

      <BottomWrap>
        {info.isBuy && info.dates && info.dates.length && (
          <DateWrap>
            {isDesktop && <DateText>дати показу</DateText>}
            <Dates>
              {info.dates.map((date, index) => (
                <React.Fragment key={date}>
                  <Date> {date}</Date>
                  {isDesktop && index + 1 !== info?.dates?.length && <Line />}
                </React.Fragment>
              ))}
            </Dates>
          </DateWrap>
        )}
        {!isDesktop && info.videoLink && (
          <ButtonWrap>
            <ButtonIcon src="/icons/close/play.svg" />
            <ButtonText>Дивитись запис</ButtonText>
          </ButtonWrap>
        )}

        {info.remarks.length > 0 && (
          <RemarksWrap isBuy={info.isBuy}>
            {info.remarks.map((item, i) => (
              <Remark key={i}>{item}</Remark>
            ))}
          </RemarksWrap>
        )}
      </BottomWrap>

      {isDesktop && info.videoLink && (
        <ButtonWrap>
          <ButtonIcon src="/icons/close/play.svg" />
          <ButtonText>Дивитись запис</ButtonText>
        </ButtonWrap>
      )}
    </Wrap>
  );
};

export default RepertoirePreview;

const Wrap = styled.div`
  position: relative;
  top: 0;
`;

const Rate = styled.span`
  position: absolute;
  top: 4vh;
  left: 0;
  height: 8vh;
  width: 8vh;
  background: #2a2a2a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.4vh;
  font-family: "murmure";
  font-size: 4vh;
  z-index: 1;

  @media (max-width: 960px) {
    animation: 1s ${fadeInLAn};
    opacity: 1;
    background: rgba(103, 103, 103, 0.5);
    top: 6vh;
    width: 60px;
    height: 60px;
    font-size: 2.6em;
  }
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 8vh;
  width: 8vh;
  right: 0;
  top: 4vh;
  background: #2a2a2a;
  border-radius: 10px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 960px) {
    animation: 1s ${fadeInRAn};
    opacity: 1;
    background: rgba(103, 103, 103, 0.5);
    top: 6vh;
    height: 60px;
    width: 60px;
  }
`;

const CloseIcon = styled.img`
  height: 4vh;
  width: 4vh;
  z-index: 2;
`;

const BottomWrap = styled.div`
  position: absolute;
  bottom: 16vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    bottom: initial;
    top: 67vh;
  }
`;

const DateWrap = styled.div`
  height: 8vh;
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  padding: 1vh;
  background: rgba(217, 217, 217, 0.1);
  @media (max-width: 960px) {
    animation: 1.5s ${fadeInRAn};
    height: auto;
    padding: 1.2vh;
    background: rgba(217, 217, 217, 0.2);
  }
`;

const DateText = styled.span`
  background: transparent;
  text-transform: uppercase;
  border-radius: 10px;
  font-family: "namu-1750";
  font-size: 2vh;
  padding: 0 1vw;
`;

const Dates = styled.div`
  height: 6vh;
  padding: 0 2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(103, 103, 103, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  font-family: "namu-1750";
  font-size: 2vh;

  @media (max-width: 960px) {
    height: auto;
    font-size: 1em;
    padding: 1.4vh 4vw;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
`;

const Line = styled.div`
  width: 1px;
  height: 28px;
  border: 1px solid #fff;
  margin: 0 1vw;
`;
const Date = styled.span`
  @media (max-width: 960px) {
    margin: 0 2vw;
  }
`;

const RemarksWrap = styled.ul<{ isBuy: boolean }>`
  margin-left: ${({ isBuy }) => (isBuy ? "2vw" : "0")};
  padding: ${({ isBuy }) => (isBuy ? "revert" : "0")};
  @media (max-width: 960px) {
    animation: 1.6s ${fadeInLAn};
    padding: 0;
    margin-left: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: ${({ isBuy }) => (isBuy ? "10vh" : "16vh")};
  }
`;
const Remark = styled.li`
  font-family: "namu-1750";
  color: #b3b3b3;
  font-size: 1.6vh;
  @media (max-width: 960px) {
    color: #fff;

    &::marker {
      color: #b11212;
    }
  }
`;
const ButtonWrap = styled.div`
  height: 8vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 0;
  bottom: 6vh;
  border-radius: 10px;
  padding: 1vh;
  background: rgba(217, 217, 217, 0.1);
  @media (max-width: 960px) {
    animation: 1.5s ${fadeInRAn};
    position: initial;
    width: min-content;
  }
`;
const ButtonText = styled.span`
  height: 6vh;
  display: flex;
  align-items: center;
  background: #fff;
  color: #000;
  border-radius: 10px;
  font-family: "namu-1750";
  text-transform: uppercase;
  font-size: 2vh;
  padding: 0 1.6vw 0.4vh;
  @media (max-width: 960px) {
    width: max-content;
    padding: 0 8vw;
  }
`;

const ButtonIcon = styled.img`
  height: 3vh;
  width: auto;
  margin: 0 1.6vw;
  @media (max-width: 960px) {
    margin: 0 4vw;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 28vh;
  z-index: 10;
  width: 72vw;
  @media (max-width: 960px) {
    animation: 1s ${fadeInLAn};
    flex-direction: column-reverse;
    bottom: 18vh;
  }
`;

const Title = styled(Prop)`
  padding: 0;
  font-size: 10vh;
  text-align: left;
  @media (max-width: 960px) {
    font-size: 7vh;
  }
`;

const Type = styled(Prop2)`
  position: initial;

  @media (max-width: 960px) {
    border: none;
    padding: 1vh 0 0;
    color: #aeaeae;
    font-size: 0.8em;
    width: 36vw;
  }
`;

const Image = styled.img`
  width: 100vw;
  border-radius: 30px;
  position: relative;
  left: -4vw;
  @media (max-width: 960px) {
    animation: 2s ${fadeInAn};
    height: 80vh;
    width: 100vw;
    object-fit: cover;
  }
`;

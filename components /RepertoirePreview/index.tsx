import React from "react";
import styled from "@emotion/styled";
import { Title as Prop } from "../TheaterPoster/Performance/PerormanceInfo";
import { Type as Prop2 } from "../TheaterPoster/Performance/PerformanceImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRouter } from "next/router";

interface Info {
  title: string;
  type: string;
  date: string;
  imgUrl: string;
  dates: number[];
  videoLink?: string;
  remarks: string[];
}

const RepertoirePreview = (info: Info) => {
  const { width, maxMobileWidth } = useWindowDimensions();
  const { back } = useRouter();

  return (
    <Wrap>
      <Rate>16+</Rate>

      <Close onClick={() => back()}>
        <CloseIcon
          src={
            width > maxMobileWidth
              ? "/icons/close/close.svg"
              : "/icons/close/closeBlack.svg"
          }
        />
      </Close>

      <TitleWrap>
        <Type>{info.type}</Type>
        <Title>{info.title}</Title>
      </TitleWrap>

      <Image alt="Preview" src={info.imgUrl} />

      <BottomWrap>
        <DateWrap>
          {width > maxMobileWidth && <DateText>дати показу</DateText>}
          <Dates>
            {info.dates.map((date, index) => (
              <React.Fragment key={date}>
                <Date> {date}</Date>
                {index !== info.dates.length - 1 && <Line />}
              </React.Fragment>
            ))}
          </Dates>
        </DateWrap>

        {info.remarks.length > 0 && (
          <RemarksWrap>
            {info.remarks.map((item, i) => (
              <Remark key={i}>{item}</Remark>
            ))}
          </RemarksWrap>
        )}
      </BottomWrap>

      {width > maxMobileWidth && info.videoLink && (
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
    background: #fffcfc;
    font-family: "murmure";
    color: #404040;
    opacity: 0.65;
    top: 6vh;
    height: 6vh;
    width: 6vh;
    font-size: 2em;
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
  opacity: 0.65;
  background: #2a2a2a;
  border-radius: 10px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: 960px) {
    background: #fffcfc;
    top: 6vh;
    height: 6vh;
    width: 6vh;
  }
`;

const CloseIcon = styled.img`
  height: 5vh;
  width: 5vh;
  z-index: 2;
  @media (max-width: 960px) {
    height: 4vh;
    width: 4vh;
  }
`;

const BottomWrap = styled.div`
  position: absolute;
  bottom: 6vh;
  display: flex;
  flex-direction: row;
`;

const DateWrap = styled.div`
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 1vh;
  background: rgba(217, 217, 217, 0.21);
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
  border-radius: 10px;
  font-family: "namu-1750";
  font-size: 2vh;

  @media (max-width: 960px) {
    font-size: 1em;
    background: #fff;
    padding: 0 4vw;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 28px;
  border: 1px solid #fff;
  margin: 0 1vw;
  @media (max-width: 960px) {
    border-color: #828282;
    width: 16px;
  }
`;
const Date = styled.span`
  @media (max-width: 960px) {
    color: #828282;
  }
`;

const RemarksWrap = styled.ul`
  margin-left: 2vw;
`;
const Remark = styled.li`
  font-family: "namu-1750";
  color: #b3b3b3;
  font-size: 1.6vh;
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
  background: rgba(217, 217, 217, 0.21);
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
`;

const ButtonIcon = styled.img`
  height: 3vh;
  width: auto;
  margin: 0 1.6vw;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 24vh;
  z-index: 10;
  width: 36vw;
`;

const Title = styled(Prop)`
  padding: 0;
  font-size: 10vh;
  text-align: left;
`;

const Type = styled(Prop2)`
  position: initial;

  @media (max-width: 960px) {
    border: none;
    padding: 2vh 0 0;
    color: #aeaeae;
    font-size: 0.8em;
    height: 4vh;
    width: 36vw;
  }
`;

const Image = styled.img`
  width: 100vw;
  border-radius: 30px;
  position: relative;
  left: -4vw;
  @media (max-width: 960px) {
    height: 96vh;
    width: 100vw;
    object-fit: cover;
  }
`;

import styled from "@emotion/styled";
import { Title as Prop } from "../TheaterPoster/Performance/PerormanceInfo";
import { Type as Prop2 } from "../TheaterPoster/Performance/PerformanceImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Info = {
  title: string;
  type: string;
  date: string;
  imgUrl: string;
};

const RepertoirePreview = (info: Info) => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Rate>16+</Rate>
      <Close>
        <CloseIcon
          src={
            width > maxMobileWidth
              ? "/icons/close/close.svg"
              : "/icons/close/closeBlack.svg"
          }
        />
      </Close>
      <Type>{info.type}</Type>
      <Title>{info.title}</Title>
      <Image src={info.imgUrl} />
      <DateWrap>
        {width > maxMobileWidth && <DateText>дати показу</DateText>}
        <Dates>
          <Date> {info.date}</Date> <Line /> <Date> {info.date}</Date>
          <Line />
          <Date> {info.date}</Date> <Line /> <Date> {info.date}</Date>
        </Dates>
      </DateWrap>
      <RemarksWrap>
        <Remark>У виставі лунає жива музика</Remark>
        <Remark>Спільний проєкт Театру Лесі та театру “Варта”</Remark>
      </RemarksWrap>
      {width > maxMobileWidth && (
        <ButtonWrap>
          <ButtonText>Дивитись запис</ButtonText>
          <ImgWrap>
            <ButtonIcon src="/icons/close/play.svg" />
          </ImgWrap>
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
  font-family: "namu-1750";
  font-size: 3.6vh;
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

const DateWrap = styled.div`
  height: 10vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  bottom: 4vh;
  border-radius: 10px;
  padding: 1vh;
  background: rgba(217, 217, 217, 0.21);
  @media (max-width: 960px) {
    left: 4vw;
  }
`;
const DateText = styled.span`
  background: #2b2a2a;
  border-radius: 10px;
  color: #b11212;
  font-family: "namu-1750";
  font-size: 2.8vh;
  padding: 2vh 1vw;
`;
const Dates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #676767;
  border-radius: 10px;
  font-family: "namu-1750";
  font-size: 2vh;
  padding: 0 1.6vw;
  @media (max-width: 960px) {
    font-size: 1em;
    background: #fff;
    padding: 0 4vw;
  }
`;
const Line = styled.div`
  width: 24px;
  height: 1px;
  border: 1px solid #b11212;
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
  position: absolute;
  bottom: 4vh;
  left: 38vw;
  @media (max-width: 960px) {
    bottom: -12vh;
    left: 0vw;
  }
`;
const Remark = styled.li`
  font-family: "namu-1750";
  font-size: 1.6vh;
`;
const ButtonWrap = styled.div`
  height: 10vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 0;
  bottom: 4vh;
  border-radius: 10px;
  padding: 1vh;
  background: rgba(217, 217, 217, 0.21);
`;
const ButtonText = styled.span`
  display: flex;
  align-items: center;
  background: #676767;
  border-radius: 10px;
  font-family: "namu-1750";
  font-size: 2vh;
  padding: 0 1.6vw 0.4vh;
`;
const ImgWrap = styled.div`
  height: 8vh;
  width: 8vh;
  padding-left: 0.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2b2a2a;
  border-radius: 10px;
`;
const ButtonIcon = styled.img``;
const Title = styled(Prop)`
  width: 42vw;
  position: absolute;
  bottom: 12vh;
  font-size: 10vh;
  text-align: left;
  @media (max-width: 960px) {
    bottom: 26vh;
    left: 4vw;
    padding: 0;
  }
`;
const Type = styled(Prop2)`
  left: 0;
  top: initial;
  bottom: 28vh;
  @media (max-width: 960px) {
    border: none;
    padding: 2vh 0 0;
    color: #aeaeae;
    font-size: 0.8em;
    height: 4vh;
    width: 36vw;
    left: 4vw;
    top: initial;
    bottom: 22vh;
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

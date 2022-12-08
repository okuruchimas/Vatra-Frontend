import styled from "@emotion/styled";
import { Title as Prop } from "../TheaterPoster/Performance/PerormanceInfo";
import { Type as Prop2 } from "../TheaterPoster/Performance/PerformanceImg";

type Info = {
  title: string;
  type: string;
  date: string;
};

const RepertoirePreview = (info: Info) => {
  return (
    <Wrap>
      <Rate>16+</Rate>
      <Close>
        <CloseIcon src="/icons/close/close.svg" />
      </Close>
      <Type>{info.type}</Type>
      <Title>{info.title}</Title>
      <Video muted autoPlay playsInline controls loop>
        <source
          src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          type="video/mp4"
        />
      </Video>
      <DateWrap>
        <DateText>дати показу</DateText>
        <Dates>
          <Date> {info.date}</Date> <Line /> <Date> {info.date}</Date> <Line />
          <Date> {info.date}</Date> <Line /> <Date> {info.date}</Date>
        </Dates>
      </DateWrap>
      <RemarksWrap>
        <Remark>У виставі лунає жива музика</Remark>
        <Remark>Спільний проєкт Театру Лесі та театру “Варта”</Remark>
      </RemarksWrap>
      <ButtonWrap>
        <ButtonText>Дивитись запис</ButtonText>
        <ImgWrap>
          <ButtonIcon src="/icons/close/play.svg" />
        </ImgWrap>
      </ButtonWrap>
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
`;
const CloseIcon = styled.img`
  height: 5vh;
  width: 5vh;
`;

const DateWrap = styled.div`
  height: 8vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  bottom: 4vh;
  //background: #d9d9d9;
  //opacity: 0.2;
  border-radius: 10px;
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
`;
const Line = styled.div`
  width: 24px;
  height: 1px;
  border: 1px solid #b11212;
  margin: 0 1vw;
`;
const Date = styled.span``;

const RemarksWrap = styled.ul`
  position: absolute;
  bottom: 4vh;
  left: 36vw;
`;
const Remark = styled.li`
  font-family: "namu-1750";
  font-size: 1.6vh;
`;
const ButtonWrap = styled.div`
  height: 8vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 0;
  bottom: 4vh;
  //background: #d9d9d9;
  //opacity: 0.2;
  border-radius: 10px;
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
`;
const Type = styled(Prop2)`
  left: 0;
  top: initial;
  bottom: 40vh;
`;
const Video = styled.video`
  width: 100vw;
  border-radius: 30px;
  position: relative;
  left: -4vw;
`;

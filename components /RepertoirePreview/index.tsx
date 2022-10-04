import styled from "@emotion/styled";

type Info = {
  title: string;
  type: string;
  date: string;
};

const RepertoirePreview = (info: Info) => {
  return (
    <Wrap>
      <Title>{info.title}</Title>
      <Video autoPlay playsInline controls loop>
        <source
          src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          type="video/mp4"
        />
      </Video>
      <Type>{info.type}</Type>
      <DateText>{info.date}</DateText>
    </Wrap>
  );
};

export default RepertoirePreview;

const Wrap = styled.div`
  position: relative;
  top: 0;
`;
const Title = styled.span`
  position: absolute;
  top: 2vh;
  left: 4vw;
  font-family: "namu-1910";
  font-size: 8vh;
  width: 40vw;
  cursor: pointer;
`;
const Type = styled.span`
  position: absolute;
  left: 2vw;
  bottom: 8vh;
  font-family: "namu-1750";
  font-size: 2.4vh;
  width: 20vw;
  text-transform: uppercase;
`;
const DateText = styled.span`
  position: absolute;
  right: 2vw;
  bottom: 8vh;
  font-family: "namu-1750";
  font-size: 8vh;
`;
const Video = styled.video`
  width: 88vw;
  height: auto;
  border-radius: 12px;
  outline: none;
`;

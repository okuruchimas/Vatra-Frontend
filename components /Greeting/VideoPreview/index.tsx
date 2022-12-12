import styled from "@emotion/styled";

const VideoPreview = () => {
  return (
    <Wrap>
      <Video autoPlay playsInline controls loop muted>
        <source
          src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          type="video/mp4"
        />
      </Video>
    </Wrap>
  );
};

export default VideoPreview;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 12px;
  width: 92vw;
  padding: 2vw 0;
  @media (max-width: 640px) {
    padding: 4vw 0;
  }
`;
const Video = styled.video`
  width: 88vw;
  height: auto;
  border-radius: 12px;
  outline: none;
  @media (max-width: 640px) {
    width: 84vw;
  }
`;

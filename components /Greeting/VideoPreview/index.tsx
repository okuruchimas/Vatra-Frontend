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
`;
const Video = styled.video`
  width: 88vw;
  height: auto;
  border-radius: 12px;
  outline: none;
`;

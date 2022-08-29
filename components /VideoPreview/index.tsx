import styled from "@emotion/styled";

const VideoPreview = () => {
  return (
    <Wrap>
      <Video autoPlay playsInline controls loop>
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
  margin-bottom: 16vh;
`;
const Video = styled.video`
  width: 96vw;
  height: auto;
  border-radius: 12px;
  outline: none;
`;

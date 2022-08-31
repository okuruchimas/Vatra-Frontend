import styled from "@emotion/styled";
import Greeting from "../../Greeting";
import OurPerformances from "../../OurPerformances";
import PhotoSlider from "../../PhotoSlider";
import StorySlider from "../../StorySlider";
import Bubbles from "../../Bubbles";

const Sections = () => {
  return (
    <Wrap>
      <Greeting />
      <OurPerformances />
      <PhotoSlider />
      <StorySlider />
      <Bubbles />
    </Wrap>
  );
};

export default Sections;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

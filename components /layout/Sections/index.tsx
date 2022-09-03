import styled from "@emotion/styled";
import Greeting from "../../Greeting";
import TheaterPoster from "../../TheaterPoster";
import PhotoSlider from "../../PhotoSlider";
import AboutUs from "../../AboutUs";
import Bubbles from "../../Bubbles";
import MovingText from "../../MovingText";
import OurTeam from "../../OurTeam";
import JoinUs from "../../JoinUs";

const Sections = () => {
  return (
    <Wrap id="/">
      <Greeting />
      <TheaterPoster />
      <PhotoSlider />
      <AboutUs />
      <Bubbles />
      <MovingText />
      <OurTeam />
      <JoinUs />
    </Wrap>
  );
};

export default Sections;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import styled from "@emotion/styled";
import Greeting from "../components /Greeting";
import TheaterPoster from "../components /TheaterPoster";
import PhotoSlider from "../components /PhotoSlider";
import AboutUs from "../components /AboutUs";
import Bubbles from "../components /Bubbles";
import MovingText from "../components /MovingText";
import OurTeam from "../components /OurTeam";
import JoinUs from "../components /JoinUs";
import Header from "../components /layout/Header";

const Home = () => {
  return (
    <Wrap id="/">
      <Header />
      <Greeting />
      <PhotoSlider />
      <TheaterPoster />
      <AboutUs />
      <Bubbles />
      <MovingText />
      <OurTeam />
      <JoinUs />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

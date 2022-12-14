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
import {
  TestArr,
  PerformanceType,
} from "../components /TheaterPoster/performances";
import { OurTeamArray, Person } from "../components /OurTeam/ourTeam";
import { Slides, Slide } from "../components /PhotoSlider/slides";
import {
  AboutUsSlide,
  AboutUsSlides,
} from "../components /AboutUs/aboutUsSlides";
import Footer from "../components /layout/Footer";

interface HomeProps {
  performances: PerformanceType[];
  ourTeam: Person[];
  slides: Slide[];
  aboutUsSlides: AboutUsSlide[];
}

const Home = ({ performances, ourTeam, slides, aboutUsSlides }: HomeProps) => {
  return (
    <Wrap id="/">
      <Header />
      <Greeting />
      {slides && <PhotoSlider slides={slides} />}
      {performances && <TheaterPoster performances={performances} />}
      {aboutUsSlides && <AboutUs aboutUsSlides={aboutUsSlides} />}
      <Bubbles />
      <MovingText />
      {ourTeam && <OurTeam members={ourTeam} />}
      <JoinUs />
      <Footer />
    </Wrap>
  );
};

export async function getStaticProps() {
  const performances = TestArr;
  const ourTeam = OurTeamArray;
  const slides = Slides;
  const aboutUsSlides = AboutUsSlides;

  return {
    props: {
      performances,
      ourTeam,
      slides,
      aboutUsSlides,
    },
  };
}

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import ImageSlider from "./ImageSlider";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Fragment } from "react";
import { AboutUsSliderProps } from "./slider";
import TitleFragment from "../layout/LargeTitle";

const AboutUs = ({ aboutUsSlides }: AboutUsSliderProps) => {
  const { isDesktop } = useWindowDimensions();

  return (
    <Wrap id="aboutUs">
      <RedTitle text="Історія театру" />
      <TitleFragment mt={2} text="Ми прийшли" />
      <TitleFragment pl={isDesktop ? 16 : 20} text="на спільну" />
      <TitleFragment pl={isDesktop ? 40 : 12} text="зустріч" />
      <TitleFragment pl={isDesktop ? 24 : 32} text="у вільний" />
      {isDesktop ? (
        <TitleFragment last text="простір “Дикий Дім”" />
      ) : (
        <Fragment>
          <TitleFragment pl={22} text="простір" />
          <TitleFragment last text="“Дикий Дім”" />
        </Fragment>
      )}
      <Description>
        який був шелтером для біженців, згодом перетворившись на простір нашої
        творчості.
      </Description>

      <ImageSlider aboutUsSlides={aboutUsSlides} />
    </Wrap>
  );
};

export default AboutUs;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 14vh 4vw 0;
`;

const Description = styled.div`
  margin: 12vh auto;
  width: 40%;
  text-align: center;
  font-family: "namu-1750";
  font-size: 3vh;
  text-transform: uppercase;
  color: #dcdada;
  span {
    margin: 2vh 0 0;
  }
  @media (max-width: 960px) {
    font-size: 2vh;
    margin: 8vh auto;
    width: 100%;
  }
`;

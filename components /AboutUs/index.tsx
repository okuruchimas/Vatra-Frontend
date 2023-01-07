import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import ImageSlider from "./ImageSlider";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Fragment } from "react";
import { AboutUsSliderProps } from "./aboutUsSlides";

const AboutUs = ({ aboutUsSlides }: AboutUsSliderProps) => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap id="aboutUs">
      <RedTitle text="Історія театру" />
      <TitleFragment marginTop={6}>Ми прийшли</TitleFragment>
      <TitleFragment paddingLeft={width > maxMobileWidth ? 16 : 20}>
        на спільну
      </TitleFragment>
      <TitleFragment paddingLeft={width > maxMobileWidth ? 40 : 12}>
        зустріч
      </TitleFragment>
      <TitleFragment paddingLeft={width > maxMobileWidth ? 24 : 32}>
        у вільний
      </TitleFragment>
      {width > maxMobileWidth ? (
        <TitleFragment last>простір “Дикий Дім”</TitleFragment>
      ) : (
        <Fragment>
          <TitleFragment paddingLeft={22}>простір</TitleFragment>
          <TitleFragment last>“Дикий Дім”</TitleFragment>
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

export const TitleFragment = styled.span<{
  paddingLeft?: number;
  last?: boolean;
  marginTop?: number;
}>`
  padding-left: ${({ paddingLeft }) =>
    paddingLeft ? `${paddingLeft}vw` : "none"};
  font-family: "murmure";
  font-size: 24vh;
  color: #fff;
  width: 100%;
  text-align: ${({ last }) => last && "right"};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}vh` : "initial")};

  @media (max-width: 960px) {
    font-size: 12vh;
  }
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
    font-size: 2.4vh;
    margin: 8vh auto;
    width: 100%;
  }
`;

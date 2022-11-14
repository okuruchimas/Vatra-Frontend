import styled from "@emotion/styled";
import RedTitle from "../layout/RedTitle";
import ImageSlider from "./ImageSlider";

const Test = [
  {
    link: "/icons/img1.png",
  },
  {
    link: "/icons/img2.png",
  },
  {
    link: "https://images.wallpaperscraft.ru/image/single/vodopad_reka_raznotsvetnyj_kamni_96301_1920x1080.jpg",
  },
  {
    link: "/icons/slider/slider1.png",
  },
  {
    link: "/icons/slider/slider2.png",
  },
  {
    link: "/icons/slider/slider3.png",
  },
  {
    link: "/icons/slider/slider4.png",
  },
  {
    link: "/icons/slider/slider5.png",
  },
];

const AboutUs = () => {
  return (
    <Wrap id="aboutUs">
      <RedTitle text="Історія театру" />
      <TitleFragment>Ми прийшли</TitleFragment>
      <TitleFragment paddingLeft={16}>на спільну</TitleFragment>
      <TitleFragment paddingLeft={40}>зустріч</TitleFragment>
      <TitleFragment paddingLeft={24}> у вільний</TitleFragment>
      <TitleFragment last>простір “Дикий Дім”</TitleFragment>
      <Description>
        Це шелтер для біженців, який перетворився на простір нашої творості.
      </Description>

      <ImageSlider slides={Test} />
    </Wrap>
  );
};

export default AboutUs;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 14vh 4vw 0;
`;

const TitleFragment = styled.span<{ paddingLeft?: number; last?: boolean }>`
  padding-left: ${({ paddingLeft }) =>
    paddingLeft ? `${paddingLeft}vw` : "none"};
  font-family: "murmure";
  font-size: 24vh;
  color: #fff;
  width: 100%;
  text-align: ${({ last }) => last && "right"};
`;

const Description = styled.div`
  margin: 12vh auto;
  width: 32%;
  text-align: center;
  font-family: "namu-1750";
  font-size: 3vh;
  color: #909090;
  span {
    margin: 2vh 0 0;
  }
`;

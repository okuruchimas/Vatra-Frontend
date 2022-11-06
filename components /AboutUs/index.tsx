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
      <RedTitle text="як створився театр" />
      <DescriptionWrap>
        <span>
          Ми прийшли на творчу зустріч у Дикий дім. Простір, який із шелтеру для
          біженців_ок, перетворився на театрально відроджувальний майданчик.
        </span>
        <span>
          Зустрілись митці_сткині з Харкова, Львова, Києва. Та вирішили, що
          варто щось робити, варто вертатись до театру, до мистецтва в цілому,
          варто досліджувати.
        </span>
        <span>
          Наші рефлексії, розказані один одній стосовно переживання першого дня
          війни, торкнули кожного_у. Й це, безсумнівно, мало торкнутись й
          глядачів_ок.
        </span>
        <span>
          Тому за 3 дні, сконцентрувавши зусилля на творенні перфоменсу, в
          Міжнародний день театру ми представились Львову.
        </span>
      </DescriptionWrap>

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
  padding: 14vh 6vw 0;
`;
const DescriptionWrap = styled.div`
  padding: 6vh 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 8vw;
  width: 80vw;
  font-family: "namu-1750";
  font-size: 2vh;
  color: #909090;
  span {
    margin: 2vh 0 0;
  }
`;

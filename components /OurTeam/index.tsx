import styled from "@emotion/styled";
import BigTitle from "../layout/BigTitle";
import PersonCard from "./PersonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const TestArr = [
  {
    name: "Артем Вусик",
    role: "Режисер",
    superPower: "Чудотворна харизма",
    url: "/icons/ourTeam/1.png",
  },
  {
    name: "Костянтин Васюков",
    role: "режисер/актор",
    superPower: "",
    url: "/icons/ourTeam/3.png",
  },
  {
    name: "Антон Репях",
    role: "Актор/лялькар",
    superPower: "",
    url: "/icons/ourTeam/4.png",
  },
  {
    name: "Юрій Cулик",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/2.png",
  },
  {
    name: "Акім Драгомирецький",
    role: "Актор/фотограф",
    superPower: "Чудотворна харизма",
    url: "/icons/ourTeam/8.png",
  },
  {
    name: "Артур Слісаренко",
    role: "Актор/лялькар",
    superPower: "",
    url: "/icons/ourTeam/5.png",
  },
  {
    name: "Ліза Прасолова",
    role: "Акторка/лялькарка",
    superPower: "",
    url: "/icons/ourTeam/6.png",
  },
  {
    name: "Тарас Волох",
    role: "Актор/хореограф",
    superPower: "",
    url: "/icons/ourTeam/7.png",
  },
];

const OurTeam = () => {
  return (
    <Wrap id="team">
      <BigTitle textBefore="наша" textAfter="команда" />

      <Container
        freeMode={true}
        grabCursor
        modules={[Autoplay, EffectCoverflow, FreeMode]}
        slidesPerView={3}
        spaceBetween={60}
        centeredSlides
        // effect={"coverflow"}
        // coverflowEffect={{
        //   rotate: 16,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        loop
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {TestArr.map(({ name, role, superPower, url }, index) => (
          <Slide key={index}>
            <PersonCard
              key={name}
              name={name}
              role={role}
              superPower={superPower}
              url={url}
            />
          </Slide>
        ))}
      </Container>
    </Wrap>
  );
};

export default OurTeam;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 14vh 6vw;
  overflow: hidden;
`;

const Container = styled(Swiper)`
  width: 100%;
  padding: 50px 0;
`;

const Slide = styled(SwiperSlide)`
  //background-position: center;
  //background-size: cover;
  //width: 32vw !important;
  //height: 300px;
  //background: #000;
`;

import styled from "@emotion/styled";
import BigTitle from "../layout/BigTitle";
import PersonCard from "./PersonCard";
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
      <SliderWrapOne>
        {TestArr.map(({ name, role, superPower, url }) => (
          <PersonCard
            key={name}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
        {TestArr.map(({ name, role, superPower, url }) => (
          <PersonCard
            key={role + name}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
      </SliderWrapOne>
      <SliderWrapTwo>
        {TestArr.map(({ name, role, superPower, url }) => (
          <PersonCard
            key={url}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
        {TestArr.map(({ name, role, superPower, url }, index) => (
          <PersonCard
            key={index}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
      </SliderWrapTwo>
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

const SliderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: calc(32vw * 16);
`;
const SliderWrapOne = styled(SliderWrap)`
  padding: 8vh 0;
  animation: photo-scroll-r 24s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes photo-scroll-r {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-32vw * 8));
    }
  } ;
`;
const SliderWrapTwo = styled(SliderWrap)`
  animation: photo-scroll-l 24s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes photo-scroll-l {
    0% {
      transform: translateX(calc(-32vw * 8));
    }
    100% {
      transform: translateX(0);
    }
  } ;
`;

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
    <Wrap>
      <BigTitle textBefore="наша" textAfter="команда" />
      <SliderWrap>
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
            key={role}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
      </SliderWrap>
      <SliderWrap1>
        {TestArr.map(({ name, role, superPower, url }) => (
          <PersonCard
            key={url}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
        {TestArr.map(({ name, role, superPower, url }) => (
          <PersonCard
            key={name + role}
            name={name}
            role={role}
            superPower={superPower}
            url={url}
          />
        ))}
      </SliderWrap1>
    </Wrap>
  );
};

export default OurTeam;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 6vw;
  overflow: hidden;
`;

const SliderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 8vh 0;
  width: calc(36vw * 16);
  animation: photo-scroll-r 24s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes photo-scroll-r {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-36vw * 8));
    }
  } ;
`;
const SliderWrap1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: calc(36vw * 16);
  animation: photo-scroll-l 24s linear infinite;
  span {
    margin: 0 2vw;
  }
  @keyframes photo-scroll-l {
    0% {
      transform: translateX(calc(-36vw * 6));
    }
    100% {
      transform: translateX(0);
    }
  } ;
`;

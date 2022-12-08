import styled from "@emotion/styled";
import PersonCard from "./PersonCard";
import { Title } from "../Bubbles";
import { useState } from "react";
import { Circle } from "../JoinUs";

const TestArr = [
  {
    name: "Артем Вусик",
    role: "Режисер",
    superPower: "Актор",
    url: "/icons/ourTeam/3.png",
  },
  {
    name: "Костянтин Васюков",
    role: "Режисер",
    superPower: "Актор",
    url: "/icons/ourTeam/4.png",
  },
  {
    name: "Дробот Іван",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/2.png",
  },
  {
    name: "Артур Рожицький",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/9.png",
  },

  {
    name: "Юрій Cулик",
    role: "Актор",
    superPower: "",
    url: "/icons/ourTeam/1.png",
  },
  {
    name: "Акім Драгомирецький",
    role: "Актор",
    superPower: "Фотограф",
    url: "/icons/ourTeam/10.png",
  },
  {
    name: "Артур Слісаренко",
    role: "Актор-лялькар",
    superPower: "",
    url: "/icons/ourTeam/5.png",
  },
  {
    name: "Ліза Прасолова",
    role: "Акторка-лялькарка",
    superPower: "",
    url: "/icons/ourTeam/6.png",
  },
  {
    name: "Тарас Волох",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/7.png",
  },
  {
    name: "Світлана Мельник",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/8.png",
  },
  {
    name: "Олеся Стрельбіцька",
    role: "Хореограф",
    superPower: "Актор",
    url: "/icons/ourTeam/11.png",
  },
];

const OurTeam = () => {
  const [posts, setPosts] = useState(TestArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  //Get current Photos
  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost);
  //Change Photos
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Wrap id="team">
      <Title>команда</Title>
      <Container>
        {currentPosts.map(({ name, role, superPower, url }, index) => (
          <Slide key={index} firstPost={0 === index}>
            <PersonCard
              key={name}
              name={name}
              role={role}
              superPower={superPower}
              url={url}
            />
          </Slide>
        ))}
        <Button onClick={() => paginate(currentPage === 1 ? 2 : 1)}>
          <ArrowRight src="/icons/arrows/arrowRight.svg" />
          <Circle isEmpty />
        </Button>
      </Container>
    </Wrap>
  );
};

export default OurTeam;

export const ArrowRight = styled.img`
  width: 12vw;
  transition: all 0.3s linear;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 14vh 0;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-top: 4vh;
`;

const Slide = styled.div<{ firstPost: boolean }>`
  margin-left: ${({ firstPost }) => (firstPost ? "24vw" : "4vw")};
  margin-bottom: 2vw;
`;

const Button = styled.div`
  position: absolute;
  right: 4vw;
  bottom: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: min-content;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    img {
      transform: translatex(32px);
      z-index: 1;
    }
  }
`;

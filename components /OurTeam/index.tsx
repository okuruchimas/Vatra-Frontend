import styled from "@emotion/styled";
import PersonCard from "./PersonCard";
import { Title } from "../Bubbles";
import { useState } from "react";
import { Circle as Prop } from "../JoinUs";
import useWindowDimensions from "../../hooks/useWindowDimensions";

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
  const { width, maxMobileWidth } = useWindowDimensions();
  const [posts, setPosts] = useState(TestArr);
  const [currentPage, setCurrentPage] = useState(1);

  //Get current Photos
  const postPerPage = width > maxMobileWidth ? 6 : 4;
  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost);

  //Change Photos
  const lastPageNumber = Math.ceil(
    posts.length / (width > maxMobileWidth ? 6 : 4)
  );
  const paginate = (pageNumber: number) => {
    if (lastPageNumber === currentPage) {
      return setCurrentPage(1);
    }
    return setCurrentPage(pageNumber);
  };

  return (
    <Wrap id="team">
      <Title>команда</Title>
      <Container>
        {currentPosts.map(({ name, role, superPower, url }, index) => (
          <Slide
            key={index}
            firstPost={width < maxMobileWidth ? false : 0 === index}
          >
            <PersonCard
              key={name}
              name={name}
              role={role}
              superPower={superPower}
              url={url}
              isPower={width > maxMobileWidth}
            />
          </Slide>
        ))}
        <Button onClick={() => paginate(currentPage + 1)}>
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
  @media (max-width: 960px) {
    width: 32vw;
  }
`;
const Circle = styled(Prop)`
  @media (max-width: 960px) {
    height: 60px;
    width: 60px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 14vh 4vw;
  overflow: hidden;
  @media (max-width: 960px) {
    padding: 4vh 4vw 14vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-top: 4vh;
  @media (max-width: 960px) {
    gap: 0 4vw;
    aspect-ratio: 20/25;
  }
`;

const Slide = styled.div<{ firstPost: boolean }>`
  margin-left: ${({ firstPost }) => (firstPost ? "24vw" : "4vw")};
  margin-bottom: 2vw;
  @media (max-width: 960px) {
    margin: 0;
  }
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

  @media (max-width: 960px) {
    right: 4vw;
    bottom: -10vh;
  }
`;

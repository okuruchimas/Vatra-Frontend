import styled from "@emotion/styled";
import PersonCard from "./PersonCard";
import { Title } from "../Bubbles";
import { useState } from "react";
import { Circle as Prop } from "../JoinUs";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { OurTeamProps, Pagination as Props, Person } from "./ourTeam";
const Pagination = new Props();

const OurTeam = ({ members }: OurTeamProps) => {
  const { width, maxMobileWidth } = useWindowDimensions();
  const [postsToShow, setPostsToShow] = useState<Person[]>(members.slice(0, 6));

  return (
    <Wrap id="team">
      <Title>команда</Title>
      <Container>
        {postsToShow.map(({ name, role, superPower, url }, index) => (
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
        <Button onClick={() => Pagination.paginate(members, setPostsToShow)}>
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
  padding: 0 4vw 14vh;
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
  right: 2vw;
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

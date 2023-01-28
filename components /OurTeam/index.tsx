import styled from "@emotion/styled";
import PersonCard from "./PersonCard";
import { Title } from "../Bubbles";
import { useEffect, useState } from "react";
import { Circle as Prop } from "../JoinUs";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { OurTeamProps, Pagination as Props, Person } from "./ourTeam";

const Pagination = new Props();

const OurTeam = ({ members }: OurTeamProps) => {
  const { isDesktopWidth } = useWindowDimensions();
  const [postsToShow, setPostsToShow] = useState<Person[]>(
    members.slice(0, isDesktopWidth ? 6 : 4)
  );

  useEffect(() => {
    setPostsToShow(members.slice(0, isDesktopWidth ? 6 : 4));
  }, [members, isDesktopWidth]);

  return (
    <Wrap id="team">
      <Title>команда</Title>
      <Container>
        {postsToShow.map(({ name, role, superPower, url }, index) => (
          <Slide key={index} firstPost={!isDesktopWidth ? false : 0 === index}>
            <PersonCard
              index={index}
              key={name}
              name={name}
              role={role}
              superPower={superPower}
              url={url}
              isPower={isDesktopWidth}
            />
          </Slide>
        ))}
        <Button
          onClick={() =>
            Pagination.paginate(members, setPostsToShow, isDesktopWidth)
          }
        >
          <ArrowRight src="/icons/arrows/arrowRight.svg" />
          <Circle isEmpty />
        </Button>
      </Container>
    </Wrap>
  );
};

export default OurTeam;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  padding: 10vh 4vw 14vh;
  overflow: hidden;
  @media (max-width: 960px) {
    padding: 4vh 4vw 14vh;
  }
`;
export const ArrowRight = styled.img`
  width: 12vw;
  transition: all 0.3s linear;
  @media (max-width: 960px) {
    width: 32vw;
  }
`;

const Circle = styled(Prop)`
  height: 80px;
  width: 80px;
  @media (max-width: 960px) {
    height: 60px;
    width: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-top: 8vh;
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
    bottom: -4vh;
  }
`;

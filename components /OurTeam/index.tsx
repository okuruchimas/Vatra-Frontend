import styled from "@emotion/styled";
import PersonCard from "./PersonCard";
import { Title } from "../Bubbles";
import { useEffect, useState } from "react";
import { Circle as Prop } from "../JoinUs";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { OurTeamProps, Pagination as Props, Person } from "./ourTeam";
import {
  merge,
  fadeInLeft,
  slideInUp,
  slideInLeft,
  fadeIn,
  zoomOut,
  zoomIn,
} from "react-animations";
import { Keyframes, keyframes } from "@emotion/react";

const Pagination = new Props();

const OurTeam = ({ members }: OurTeamProps) => {
  const { isDesktop } = useWindowDimensions();
  const lastId = isDesktop ? 2 : 1;
  const tAnimation = isDesktop
    ? merge(slideInUp, slideInLeft)
    : merge(fadeIn, zoomIn);
  const bAnimation = isDesktop ? fadeInLeft : zoomIn;

  const [postsToShow, setPostsToShow] = useState<Person[]>(
    members.slice(0, isDesktop ? 6 : 4)
  );
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setPostsToShow(members.slice(0, isDesktop ? 6 : 4));
  }, [members, isDesktop]);

  return (
    <Wrap id="team">
      <Title>команда</Title>
      <Container>
        {postsToShow.map(({ name, role, superPower, url }, index) => (
          <Slide
            key={name}
            firstPost={!isDesktop ? false : 0 === index}
            isTop={index <= lastId}
            fadeInAnimation={keyframes`${
              index <= lastId ? tAnimation : bAnimation
            }`}
          >
            <PersonCard
              index={index}
              name={name}
              role={role}
              superPower={superPower}
              url={url}
              isPower={isDesktop}
            />
          </Slide>
        ))}
        <Button
          onClick={() => {
            setIsShown(true);
            isDesktop
              ? Pagination.paginate(members, setPostsToShow, isDesktop)
              : null;
            setTimeout(() => {
              setIsShown(false);
            }, 240);
          }}
          isShown={isShown}
          onTouchStart={() => {
            setIsShown(true);
            !isDesktop
              ? Pagination.paginate(members, setPostsToShow, isDesktop)
              : null;
            setTimeout(() => {
              setIsShown(false);
            }, 240);
          }}
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
  padding: 4vh 4vw 14vh;
  overflow: hidden;
  margin-top: 6vh;
  @media (max-width: 960px) {
    margin-top: 0;
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

const Slide = styled.div<{
  firstPost: boolean;
  isTop: boolean;
  fadeInAnimation: Keyframes;
}>`
  margin-left: ${({ firstPost }) => (firstPost ? "24vw" : "4vw")};
  margin-bottom: 2vw;
  animation: 1.6s ${({ fadeInAnimation }) => fadeInAnimation};
  z-index: ${({ isTop }) => (isTop ? 4 : 3)};

  @media (max-width: 960px) {
    margin: 0;
  }
`;

const Button = styled.div<{ isShown: boolean }>`
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  right: 2vw;
  bottom: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: min-content;
  cursor: pointer;

  //&:hover {
  //  opacity: 0.8;
  img {
    transform: ${({ isShown }) => (isShown ? "translatex(32px)" : null)};
    z-index: 1;
  }
  //}

  @media (max-width: 960px) {
    right: 4vw;
    bottom: -4vh;
  }
`;

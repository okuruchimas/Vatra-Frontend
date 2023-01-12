import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { AboutUsSliderProps } from "../aboutUsSlides";

const ImageSlider = ({ aboutUsSlides }: AboutUsSliderProps) => {
  const [currentId, setCurrentId] = useState<number>(0);
  let currentN = currentId + 1;

  const currentNumber = () => {
    if (currentN.toString().length === 1) {
      return "0" + currentN;
    }
    return currentN;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentId === aboutUsSlides.length - 1) {
        return setCurrentId(0);
      }
      return setCurrentId(currentId + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [aboutUsSlides.length, currentId]);

  return (
    <Wrap>
      <LeftBlock>
        <Img
          style={{ backgroundImage: `url(${aboutUsSlides[currentId].link})` }}
        ></Img>
        <LinesWrap>
          {aboutUsSlides.map((item, index) => (
            <LineWrap key={item.link} onClick={() => setCurrentId(index)}>
              <LoadingLine
                isRed={currentId > index}
                isAnimation={currentId === index}
                slidesLength={aboutUsSlides.length}
                key={index}
              />
            </LineWrap>
          ))}
        </LinesWrap>
      </LeftBlock>
      <RightBlock>
        <Description>{aboutUsSlides[currentId].text}</Description>
        <Pagination>
          <EmptyNumber>{currentNumber()}</EmptyNumber>
          <Number>/{"0" + aboutUsSlides.length}</Number>
        </Pagination>
      </RightBlock>
    </Wrap>
  );
};

export default ImageSlider;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ffff;
  padding: 16vh 0;
  width: 100%;
  color: #fff;
  @media (max-width: 960px) {
    padding: 10vh 0 6vh;
    flex-direction: column;
  }
`;

const LeftBlock = styled.div``;
const LineWrap = styled.div`
  padding: 0 0 2.4vh;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LinesWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-top: 10vh;
    width: 84%;
  }
`;

const LoadingLine = styled.div<{
  isRed: boolean;
  isAnimation: boolean;
  slidesLength: number;
}>`
  margin-top: 2.4vh;
  width: ${({ slidesLength }) => `calc(34vw / ${slidesLength})`};
  height: 1px;
  border-radius: 24px;
  background: ${({ isRed }) => (isRed ? "#b11212" : "#bbbbbb")};

  @media (max-width: 960px) {
    width: ${({ slidesLength }) => `calc(48vw / ${slidesLength})`};
  }

  &:before {
    display: block;
    position: relative;
    content: "";
    height: 1px;
    width: 0;
    right: 0;
    border-radius: 24px;
    background: #b11212;
    animation: ${({ isAnimation }) =>
      isAnimation ? "loading-line 6s linear infinite;" : "none"};

    @media (max-width: 960px) {
      animation: ${({ isAnimation }) =>
        isAnimation ? "loading-line-mobile 6s linear infinite;" : "none"};
    }
  }
  @keyframes loading-line {
    0% {
      width: 0;
    }

    100% {
      width: ${({ slidesLength }) => `calc(34vw / ${slidesLength})`};
    }
  }

  @keyframes loading-line-mobile {
    0% {
      width: 0;
    }

    100% {
      width: ${({ slidesLength }) => `calc(48vw / ${slidesLength})`};
    }
  } ;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 2vw;
  @media (max-width: 960px) {
    position: relative;
  }
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-size: 3.2vh;
  color: #b5b5b5;
  @media (max-width: 960px) {
    padding: 6vh 0 0 6vw;
    font-size: 2vh;
    min-height: 24vh;
  }
`;

const Img = styled.div`
  width: 46vw;
  border-radius: 12px;
  background-size: cover;
  aspect-ratio: 181/190;
  background-position: center;
  @media (max-width: 960px) {
    width: 92vw;
    aspect-ratio: 350/284;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: "namu-1750";
  font-size: 8vw;

  @media (max-width: 960px) {
    width: 84%;
    font-size: 8vh;
    position: absolute;
    top: -22vh;
    left: 0;
  }
`;

const EmptyNumber = styled.span`
  margin: 0 4vw 0 -1vw;
  align-self: center;
  cursor: pointer;
  font-size: 2.4em;
  line-height: 1em;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #b11212;

  @media (max-width: 960px) {
    -webkit-text-stroke-width: 1px;
    font-size: 2em;
  }
`;

const Number = styled.span``;

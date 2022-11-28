import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type Props = {
  slides: { link: string }[];
};

const ImageSlider = ({ slides }: Props) => {
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
      if (currentId === slides.length - 1) {
        return setCurrentId(0);
      }
      return setCurrentId(currentId + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length, currentId]);

  return (
    <Wrap>
      <LeftBlock>
        <Img
          style={{ backgroundImage: `url(${slides[currentId].link})` }}
        ></Img>
        <LinesWrap>
          {slides.map((item, index) => (
            <LineWrap key={item.link} onClick={() => setCurrentId(index)}>
              <LoadingLine
                isRed={currentId > index}
                isAnimation={currentId === index}
                slidesLength={slides.length}
                key={index}
              />
            </LineWrap>
          ))}
        </LinesWrap>
      </LeftBlock>
      <RightBlock>
        <Description>
          Наші рефлексії, розказані один одному стосовно переживання першого дня
          війни, торкнулись кожного.
          <br />
          Тому за 3 дні, сконцентрувавши зусилля на творенні перфоменсу, в
          Міжнародний день театру ми представились Львову.
        </Description>
        <Pagination>
          <Number>{currentNumber()}</Number>/{"0" + slides.length}
        </Pagination>
      </RightBlock>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ffff;
  padding: 16vh 0;
  width: 100%;
  color: #fff;
`;

export default ImageSlider;

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
`;

const RightBlock = styled.div`
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2.4vh;
  color: #b5b5b5;
`;

const Img = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: "namu-1750";
  font-size: 8vw;
`;
const LoadingLine = styled.div<{
  isRed: boolean;
  isAnimation: boolean;
  slidesLength: number;
}>`
  margin-top: 2.4vh;
  width: ${({ slidesLength }) => `calc(32vw / ${slidesLength})`};
  height: 1px;
  border-radius: 24px;

  background: ${({ isRed }) => (isRed ? "#b11212" : "#bbbbbb")};
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
      isAnimation ? "loading-line 4s linear infinite;" : "none"};
  }
  @keyframes loading-line {
    0% {
      width: 0;
    }

    100% {
      width: ${({ slidesLength }) => `calc(32vw / ${slidesLength})`};
    }
  } ;
`;

const Number = styled.span`
  margin: 0 4vw 0 0;
  align-self: center;
  cursor: pointer;
  font-size: 2em;
  line-height: 1em;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #b11212;
`;

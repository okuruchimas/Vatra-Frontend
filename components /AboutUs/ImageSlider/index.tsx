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
      console.log(currentId, "d");
      console.log(slides.length, "l");
      if (currentId === slides.length - 1) {
        return setCurrentId(0);
      }
      return setCurrentId(currentId + 1);
      console.log("This will be called every 2 seconds");
    }, 4000);

    return () => clearInterval(interval);
  }, [currentId]);

  return (
    <Wrap>
      <LeftBlock>
        <Img
          style={{ backgroundImage: `url(${slides[currentId].link})` }}
        ></Img>
        <LoadingLine />
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
  cursor: pointer;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: "namu-1750";
  font-size: 8vw;
`;
const LoadingLine = styled.div`
  margin-top: 3.2vh;
  width: 4vw;
  height: 1px;
  border-radius: 24px;
  background: #bbbbbb;
  &:before {
    display: block;
    position: relative;
    content: "";
    bottom: 1px;
    height: 3px;
    width: 0;
    right: 0;
    border-radius: 24px;
    background: #b11212;
    animation: loading-line 4s linear infinite;
  }
  @keyframes loading-line {
    0% {
      width: 0;
    }

    100% {
      width: 4vw;
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

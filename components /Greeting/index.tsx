import styled from "@emotion/styled";
import VideoPreview from "./VideoPreview";
import { BlackGradient } from "../layout/BlackGradients";
import { Link } from "react-scroll";
import DonateButton from "../layout/DonateButton";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Greeting = () => {
  const [isHint, setHint] = useState<boolean>(false);
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Preview src="/icons/logo/varta.svg" />
      <BuySection>
        <LeftText>
          На сторожі Української культури. <br /> Створений під час війни в
          Україні.
        </LeftText>
        <ButtonsWrap>
          {width < maxMobileWidth && (
            <DonateButton isHint={isHint} setHint={setHint} />
          )}
          <Button to="poster" spy smooth offset={20} duration={2000} isDynamic>
            Дивитись квитки
          </Button>
          <ArrowSmall src="/icons/arrows/arrowDown.svg" />
        </ButtonsWrap>
      </BuySection>

      <VideoPreview />

      <Info>
        <BlackGradient
          turnLeft
          size={24}
          animationTime={16}
          left={-16}
          top={68}
          src="/icons/gradients/left.svg"
        />
        <LeftBlock>
          <Subtitle>
            Ми створили незалежний театр для підтримки та розвитку культурного
            фронту України.
          </Subtitle>
        </LeftBlock>

        <RightBlock>
          <ArrowDown src="/icons/arrows/arrowDown.svg" />
          <Description>
            Увібравши в себе митців із усієї країни, ми просуваємо та творимо
            сучасне українське мистецтво в такий болючий для сердець час.
          </Description>
          <BlackGradient
            size={36}
            animationTime={20}
            right={-20}
            bottom={8}
            src="/icons/gradients/right.svg"
          />
        </RightBlock>
      </Info>
    </Wrap>
  );
};

export default Greeting;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28vh 4vw 0;
  width: 100vw;

  @media (max-width: 640px) {
    padding-top: 40vh;
  }
`;
export const Preview = styled.img`
  width: 88vw;
`;
const BuySection = styled.div`
  padding: 22vh 0 4vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    padding: 2vh 0 4vh;
    flex-direction: column;
  }
`;
const LeftText = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 2vh;
  color: #b5b5b5;
  @media (max-width: 640px) {
    padding-bottom: 28vh;
    text-align: center;
  }
`;

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18vh 0 6vh;
`;

const LeftBlock = styled.div`
  padding-left: 6vw;
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
`;

const RightBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const Subtitle = styled.span`
  font-family: "murmure";
  font-size: 10vh;
  color: #fefefe;
`;

const Description = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 2.4vh;
  color: #b5b5b5;
  padding-top: 64px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Button = styled(Link)`
  font-family: "namu-1400";
  width: 120px;
  text-transform: uppercase;
  text-align: left;
  color: #b11212;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 640px) {
    margin-right: 4vw;
  }
`;

const ArrowDown = styled.img`
  height: 44vh;
  width: 2vw;
  animation: down 3s infinite;
  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(32px);
    }
    40% {
      transform: translate(0);
    }
  }
`;
const ArrowSmall = styled(ArrowDown)`
  height: 8vh;
  position: relative;
  animation: down-small 3s infinite;
  @keyframes down-small {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(16px);
    }
    40% {
      transform: translate(0);
    }
  }
  @media (max-width: 640px) {
    left: -4vw;
  }
`;

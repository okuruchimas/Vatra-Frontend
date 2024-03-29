import styled from "@emotion/styled";
import MainPreview from "./MainPreview";
import { BlackGradient } from "../layout/BlackGradients";
import { Link } from "react-scroll";
import DonateButton from "../layout/DonateButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { fadeInUp, fadeInDown, fadeInRight } from "react-animations";
import { keyframes } from "@emotion/react";

const fadeInDownAn = keyframes`${fadeInDown}`;
const fadeInUpAn = keyframes`${fadeInUp}`;
const fadeInRightAn = keyframes`${fadeInRight}`;

const Greeting = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <Wrap>
      <Preview src="/icons/logo/varta.webp" />
      <BuySection>
        <LeftText>
          На сторожі Української культури. <br />
          Створений під час війни в Україні.
        </LeftText>
        <ButtonsWrap>
          {!isDesktop && <DonateButton />}
          {isDesktop && <ArrowSmall src="/icons/arrows/arrowDownSmall.svg" />}
          <Button to="poster" spy smooth offset={20} duration={2000} isDynamic>
            <Text>Дивитись квитки</Text>
            {!isDesktop && (
              <ArrowSmall src="/icons/arrows/arrowDownSmall.svg" />
            )}
          </Button>
        </ButtonsWrap>
      </BuySection>

      <MainPreview />

      <Info>
        <BlackGradient
          turnLeft
          size={isDesktop ? 30 : 64}
          left={isDesktop ? -16 : -38}
          top={isDesktop ? 68 : 62}
          animationTime={16}
          src="/icons/gradients/left.svg"
        />
        <LeftBlock>
          <Subtitle>
            Ми створили незалежний театр для підтримки та розвитку культурного
            фронту України.
          </Subtitle>
        </LeftBlock>

        <RightBlock>
          {isDesktop && <ArrowDown src="/icons/arrows/arrowDown.svg" />}
          <Description>
            Увібравши в себе митців і мисткинь з усієї країни, ми просуваємо та
            творимо сучасне українське мистецтво в такий турбулентний час.
          </Description>
          <BlackGradient
            size={isDesktop ? 36 : 60}
            right={isDesktop ? -32 : -40}
            top={isDesktop ? -8 : 8}
            animationTime={20}
            src="/icons/gradients/right.svg"
          />
        </RightBlock>
      </Info>
    </Wrap>
  );
};

export default Greeting;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
  padding: 28vh 4vw 0;
  width: 100vw;

  @media (max-width: 960px) {
    padding: 26vh 4vw 2vh;
  }
`;

export const Preview = styled.img`
  width: 88vw;
  animation: 1s ${fadeInDownAn};

  @media (max-width: 960px) {
  }
`;
const BuySection = styled.div`
  padding: 22vh 0 4vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding: 2vh 0 4vh;
    flex-direction: column;
  }
`;
const LeftText = styled.span`
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 2vh;
  color: #b5b5b5;
  animation: 1s ${fadeInUpAn};

  @media (max-width: 960px) {
    font-family: "namu-1400";
    padding-bottom: 8vh;
    margin-bottom: 20vh;
    font-size: 1em;
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
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 12vh 0 4vh;
  }
`;

const LeftBlock = styled.div`
  padding-left: 6vw;
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  @media (max-width: 960px) {
    width: 100%;
    padding-left: 8vw;
  }
`;

const RightBlock = styled.div`
  position: relative;
  top: 3.6vh;
  right: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media (max-width: 960px) {
    top: 0;
    right: 0;
    width: 100%;
    padding-left: 8vw;
  }
`;

const Subtitle = styled.span`
  font-family: "murmure";
  font-size: 10vh;
  color: #fefefe;
  @media (max-width: 960px) {
    font-size: 3em;
  }
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-weight: 300;
  font-size: 2.4vh;
  color: #b5b5b5;
  padding-top: 100px;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 18px;
    padding-top: 2vh;
    text-align: left;
    line-height: 136%;
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    width: 100%;
  }
  animation: 1s ${fadeInRightAn};
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  font-family: "namu-1400";
  font-size: 2vh;
  text-transform: uppercase;
  text-align: right;
  color: #b11212;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 960px) {
    font-size: 1em;
    text-transform: none;
    width: max-content;
    text-align: left;
    margin-right: 10vw;
  }
`;

const Text = styled.div`
  display: table-caption;
  padding-top: 0.5vh;
  width: min-content;
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

export const ArrowSmall = styled(ArrowDown)`
  height: 6vh;
  position: relative;
  top: 1vh;
  animation: down-small 3s infinite;
  @keyframes down-small {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(12px);
    }
    40% {
      transform: translate(0);
    }
  }
  @media (max-width: 960px) {
    top: 0;
    left: 6vw;
  }
`;

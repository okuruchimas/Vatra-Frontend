import styled from "@emotion/styled";
import Arrow from "../layout/Arrow";
import VideoPreview from "../VideoPreview";
import Button from "../layout/Button";

const Greeting = () => {
  return (
    <Wrap>
      <Preview src="/icons/varta.svg" />
      <BuySection>
        <LeftText>
          На сторожі Української культури. <br /> Створений під час війни.
        </LeftText>
        <Button />
      </BuySection>
      <VideoPreview />
      <Info>
        <LeftBlock>
          <Title>Що ми робимо?</Title>
          <Subtitle>
            Ми створили театр для підтримки культурного фронту України
          </Subtitle>
        </LeftBlock>
        <RightBlock>
          <ArrowDown height="315" width="16" src="/icons/arrowDown.svg" />
          <Description>
            Увібравши в себе митців із усієї країни, ми просуваємо та творимо
            сучасне українське мистецтво в такий болючий для сердець час.
          </Description>
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
  padding: 8vh 0;
`;

const Preview = styled.img`
  width: 96vw;
`;
const BuySection = styled.div`
  margin: 12vh 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LeftText = styled.span`
  margin-left: 6vw;
  font-family: "namu-pro";
  font-weight: 300;
  font-size: 18px;
  color: #e1e1e1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftBlock = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 14vw;
`;

const Title = styled.div`
  font-family: "namu-1750";
  font-weight: 300;
  font-size: 16px;
  padding: 16px 0;
  text-transform: uppercase;

  color: #d8d8d8;
`;

const Subtitle = styled.div`
  font-family: "namu-1400";
  font-size: 40px;
  color: #fefefe;
`;

const Description = styled.div`
  font-family: "namu-1750";
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
  padding-top: 64px;
`;

const ArrowDown = styled.img`
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

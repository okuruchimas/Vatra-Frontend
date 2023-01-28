import styled from "@emotion/styled";

const JoinUs = () => {
  return (
    <Wrap id="contacts">
      <Title>Долучайся до культурного фронту</Title>
      <ArrowWrap>
        <ArrowDown src="/icons/arrows/arrowDown.svg" />
        <Circle />
        <BuyText>Придбати квиток</BuyText>
      </ArrowWrap>
    </Wrap>
  );
};

export default JoinUs;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6vh 0 2vh;
`;
const Title = styled.span`
  font-family: "namu-1400";
  font-size: 4vh;
  width: 40vw;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 960px) {
    font-size: 3vh;
    width: 84vw;
  }
`;
const ArrowWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 4vh 0 0;
  @media (max-width: 960px) {
    padding: 8vh 0 0;
  }
`;
const ArrowDown = styled.img`
  height: 16vh;
  width: 2vw;
  animation: down 3s infinite;
  z-index: 5;
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
  @media (max-width: 960px) {
    height: 30vh;
    width: 4vw;
  }
`;
export const Circle = styled.div<{ isEmpty?: boolean }>`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 2px solid #b11212;
  background: ${({ isEmpty }) => (isEmpty ? "none" : "#b11212")};
  animation: pulse 3s infinite;
  z-index: 4;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(142, 23, 23, 0.583333);
    }
    70% {
      box-shadow: 0 0 0 60px rgba(204, 169, 44, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`;
const BuyText = styled.span`
  font-family: "murmure";
  font-size: 36vh;
  line-height: 40vh;
  padding-bottom: 1vh;
  text-transform: uppercase;
  color: #b11212;
  @media (max-width: 960px) {
    font-size: 5em;
    line-height: 12vh;
    margin-top: 6vh;
  }
`;

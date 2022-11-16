import styled from "@emotion/styled";

const JoinUs = () => {
  return (
    <Wrap id="contacts">
      <Title>Приєднуйся до культурного фронту</Title>
      <ArrowWrap>
        <ArrowDown src="/icons/arrows/arrowDown.svg" />
        <Circle />
        <BuyText>Купити квиток</BuyText>
      </ArrowWrap>
    </Wrap>
  );
};

export default JoinUs;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6vh 0 2vh;
`;
const Title = styled.span`
  font-family: "namu-1750";
  font-size: 2.8vh;
  text-transform: uppercase;
  color: #ffffff;
`;
const ArrowWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 6vh 0 0;
  &:hover {
    img {
    }
  }
`;
const ArrowDown = styled.img`
  height: 32vh;
  width: 2vw;
  animation: down 3s infinite;
  z-index: 1;
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
export const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 2px solid #b11212;
  background: #b11212;
  animation: pulse 3s infinite;
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
  font-size: 26rem;
  color: #b11212;
`;

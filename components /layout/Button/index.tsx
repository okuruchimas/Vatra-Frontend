import styled from "@emotion/styled";
import Arrow from "../Arrow";

const Button = () => {
  return (
    <Wrap>
      <Text>Купити квиток</Text> <Arrow />
    </Wrap>
  );
};

export default Button;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1vw;
  cursor: pointer;

  &:hover {
    img:first-of-type {
      transition: left 0.4s ease;
      left: 12px;
    }
    div:first-of-type {
      opacity: 0.4;
    }
    span:last-of-type {
      background: #b11212;
    }
  }
`;
const Text = styled.div`
  font-family: "namu-1400";
  font-weight: 100;
  font-size: 2vh;
  text-transform: uppercase;

  color: #ffffff;
  margin-right: 20px;
`;

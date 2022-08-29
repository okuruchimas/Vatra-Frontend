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
  padding-right: 5vw;
`;
const Text = styled.div`
  font-family: "namu-1400";
  font-weight: 100;
  font-size: 20px;
  text-transform: uppercase;

  color: #ffffff;
  margin-right: 20px;
`;

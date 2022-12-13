import styled from "@emotion/styled";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <Wrap>{text}</Wrap>;
};

export default Button;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max-content;
  font-family: "namu-1400";
  width: 12vw;
  height: 5vh;
  padding: 0 1.2vw;
  color: #000;
  font-size: 2vh;
  background: #fff;
  text-transform: uppercase;
  border-radius: 24px;
  cursor: pointer;
  border: 1px solid #fff;
  &:hover {
    background: inherit;
    color: #fff;
    border: 1px solid #fff;
  }
  @media (max-width: 960px) {
    padding: 0 4vw;
  }
`;

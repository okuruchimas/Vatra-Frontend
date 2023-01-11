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
  padding: 0 2vw;
  font-size: 2vh;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #fff;
  color: #b11212;
  background: inherit;
  border-radius: 60px;

  &:hover {
    background: #b11212;
    color: #fff;
    border: 1px solid #b11212;
  }

  @media (max-width: 960px) {
    padding: 0 4vw;
    width: 40vw;
  }
`;

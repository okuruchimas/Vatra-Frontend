import styled from "@emotion/styled";

type Props = {
  text: string;
};

const RedTitle = ({ text }: Props) => {
  return <Wrap>{text}</Wrap>;
};

export default RedTitle;

const Wrap = styled.span`
  width: 92vw;
  text-transform: uppercase;
  font-family: "namu-1750";
  padding-bottom: 4vh;
  font-size: 2.4vh;
  color: #b11212;
  border-bottom: 1px solid #ffff;

  @media (max-width: 960px) {
    padding-bottom: 2vh;
    font-size: 2vh;
  }
`;

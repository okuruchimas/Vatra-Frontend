import styled from "@emotion/styled";

type Props = {
  text: string;
  buyLink: string;
};

const Button = ({ text, buyLink }: Props) => {
  return (
    <Link target="_blank" rel="noreferrer" href={buyLink}>
      <Wrap>{text}</Wrap>
    </Link>
  );
};

export default Button;

const Link = styled.a`
  text-decoration: none;
  width: min-content;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max-content;
  font-family: "namu-1400";
  width: 12vw;
  height: 5vh;
  padding: 0 3vw;
  font-size: 2vh;
  text-transform: uppercase;
  cursor: pointer;

  background: #b11212;
  color: #fff;
  border: 1px solid #b11212;
  border-radius: 60px;

  &:hover {
    border: 1px solid #fff;
    color: #b11212;
    background: #fff;
  }

  @media (max-width: 960px) {
    padding: 0 4vw;
    width: 40vw;
  }
`;

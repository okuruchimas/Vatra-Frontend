import styled from "@emotion/styled";
type Props = {
  textBefore: string;
  textAfter: string;
};
const RedTitle = ({ textBefore, textAfter }: Props) => {
  return (
    <Wrap>
      {textBefore}
      <Circle> &#11044; </Circle>
      {textAfter}
    </Wrap>
  );
};

export default RedTitle;

const Wrap = styled.span`
  max-width: 60vw;
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 10vh;
  color: #b11212;
`;

const Circle = styled(Wrap)`
  max-width: min-content;
  font-family: initial;
  font-size: 4vh;
  position: relative;
  bottom: 2vh;
`;

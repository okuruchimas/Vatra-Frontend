import styled from "@emotion/styled";

type Props = {
  textBefore: string;
  textAfter: string;
  isGray?: boolean;
};

const BigTitle = ({ textBefore, textAfter, isGray }: Props) => {
  return (
    <Wrap isGray={isGray}>
      {textBefore}
      <Circle isGray={isGray}> &#11044; </Circle>
      {textAfter}
    </Wrap>
  );
};

export default BigTitle;

const Wrap = styled.span<{ isGray?: boolean }>`
  width: 64vw;
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 10vh;
  color: ${({ isGray }) => (isGray ? "#A4A4A4" : "#b11212")}; ;
`;

const Circle = styled(Wrap)`
  max-width: min-content;
  font-family: initial;
  font-size: 4vh;
  position: relative;
  bottom: 2vh;
`;

import styled from "@emotion/styled";
type Props = {
  textBefore: string;
  textAfter: string;
};
const RedTitle = ({ textBefore, textAfter }: Props) => {
  return (
    <Wrap>
      <Text>{textBefore}</Text> <Circle /> <Text>{textAfter}</Text>
    </Wrap>
  );
};

export default RedTitle;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Text = styled.span`
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 10vh;
  color: #b11212;
`;
const Circle = styled.div`
  height: 32px;
  width: 32px;
  margin: 16px 24px 0;
  border-radius: 50%;
  background: #b11212;
`;

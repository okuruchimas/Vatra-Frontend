import styled from "@emotion/styled";
import Greeting from "../../Greeting";

const Sections = () => {
  return (
    <Wrap>
      <Greeting />
    </Wrap>
  );
};

export default Sections;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2%;
`;

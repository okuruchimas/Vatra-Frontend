import styled from "@emotion/styled";
import Greeting from "../../Greeting";
import OurPerformances from "../../OurPerformances";

const Sections = () => {
  return (
    <Wrap>
      <Greeting />
      <OurPerformances />
    </Wrap>
  );
};

export default Sections;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import styled from "@emotion/styled";
import Greeting from "../../Greeting";
import OurPerformances from "../../OurPerformances";
import PhotoSlider from "../../PhotoSlider";

const Sections = () => {
  return (
    <Wrap>
      <Greeting />
      <OurPerformances />
      <PhotoSlider />
    </Wrap>
  );
};

export default Sections;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

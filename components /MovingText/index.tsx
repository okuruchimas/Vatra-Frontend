import styled from "@emotion/styled";
import { Preview as Prop } from "../Greeting";

const MovingText = () => {
  return (
    <Wrap>
      <Preview src="/icons/logo/largeText.svg" loading="lazy" />
    </Wrap>
  );
};

export default MovingText;

const Wrap = styled.section`
  margin: 16vh 0 12vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 960px) {
    margin: 12vh;
  }
`;

const Preview = styled(Prop)`
  width: 98vw;
  @media (max-width: 960px) {
    width: 100vw;
  }
`;

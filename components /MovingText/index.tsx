import styled from "@emotion/styled";
import { Preview } from "../Greeting";

const MovingText = () => {
  return (
    <Wrap>
      <Preview src="/icons/logo/largeText.svg" loading="lazy" />
    </Wrap>
  );
};

export default MovingText;

const Wrap = styled.div`
  margin: 22vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;

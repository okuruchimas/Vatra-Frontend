import styled from "@emotion/styled";
import { TestArr } from "../../components /TheaterPoster";

const Repertoire = () => {
  return <Wrap>{TestArr[0].title}</Wrap>;
};

export default Repertoire;

const Wrap = styled.div`
  margin: auto;
  color: white;
`;

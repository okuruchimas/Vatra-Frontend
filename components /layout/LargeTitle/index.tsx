import styled from "@emotion/styled";

type Props = {
  text: string;
  pl?: number;
  last?: boolean;
  mt?: number;
};

const TitleFragment = ({ pl, mt, last, text }: Props) => {
  return (
    <Wrap pl={pl} mt={mt} last={last}>
      {text}
    </Wrap>
  );
};

export default TitleFragment;

export const Wrap = styled.span<{
  pl?: number;
  last?: boolean;
  mt?: number;
}>`
  padding-left: ${({ pl }) => (pl ? `${pl}vw` : "initial")};
  font-family: "murmure";
  line-height: 24vh;
  font-size: 24vh;
  color: #fff;
  width: 100%;
  text-align: ${({ last }) => last && "right"};
  margin-top: ${({ mt }) => (mt ? `${mt}vh` : "initial")};

  @media (max-width: 960px) {
    line-height: initial;
    font-size: 7.6vh;
  }
`;

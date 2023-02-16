import styled from "@emotion/styled";

type Props = {
  text: string;
  pl?: number;
  last?: boolean;
  mt?: number;
  fs?: number;
};

const TitleFragment = ({ fs, pl, mt, last, text }: Props) => {
  return (
    <Wrap fs={fs} pl={pl} mt={mt} last={last}>
      {text}
    </Wrap>
  );
};

export default TitleFragment;

const Wrap = styled.span<{
  pl?: number;
  last?: boolean;
  mt?: number;
  fs?: number;
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
    line-height: 8vh;
    font-size: ${({ fs }) => (fs ? `${fs}vh` : "7.6vh")};
  }
`;

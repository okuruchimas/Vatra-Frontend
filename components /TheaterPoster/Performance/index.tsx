import styled from "@emotion/styled";
import Button from "../../layout/Button";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import Repertoire from "../../../pages/[id]";

export type RepertoireProps = {
  title: string;
  description: string;
  type: string;
  date: string;
  imgUrl: string;
  link: string;
};

const Performance = (performance: RepertoireProps) => {
  const { push } = useRouter();

  return (
    <Wrap>
      <LeftBlock>
        <Img src={performance.imgUrl} />
        <Type>{performance.type}</Type>
        <DateText>{performance.date}</DateText>
      </LeftBlock>
      <RightBlock>
        <Title>{performance.title}</Title>
        <Description>{parse(performance.description)}</Description>
        <BuyWrap>
          <Button text={"купити квитки"} />
          <Details onClick={() => push(performance.link)}>
            Дізнатися більше
          </Details>
        </BuyWrap>
      </RightBlock>
    </Wrap>
  );
};

export default Performance;

const Wrap = styled.div`
  height: 38vw;
  width: 92vw;
  display: flex;
  flex-direction: row;
  margin: 8vh 0;
  color: white;
`;

const LeftBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding-right: 4vw;
`;
const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 4vw;
  width: 46vw;
`;

const Img = styled.img`
  width: 38vw;
  height: 38vw;
  object-fit: cover;
  border-radius: 16px;
`;

const Title = styled.span`
  font-family: "murmure";
  font-size: 8vh;
  padding: 4vh 0;
  text-align: center;
`;

const DateText = styled.span`
  position: absolute;
  bottom: -8vh;
  font-family: "namu-1750";
  font-size: 16vw;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2vh;
  text-align: center;
  color: #b5b5b5;

  p {
    margin: 0 auto 2vh;
  }
`;

const BuyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  width: 100%;
`;

const Type = styled.span`
  text-transform: uppercase;
  width: max-content;
  color: #fff;
  font-family: "namu-1750";
  font-size: 1.6vh;
  padding: 1vh 1vw;
  background: inherit;
  border-radius: 24px;
  border: 1px solid #fff;
  position: absolute;
  left: 2vw;
  top: 2vh;
`;
const Details = styled.span`
  font-family: "namu-1750";
  margin-left: 2vw;
  font-size: 2vh;
  background: inherit;
  text-transform: uppercase;
  border-radius: 24px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

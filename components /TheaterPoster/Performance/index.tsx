import styled from "@emotion/styled";
import Button from "../../layout/Button";
import parse from "html-react-parser";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  type: string;
  date: string;
  imgUrl: string;
  link: string;
};

const Performance = (performance: Props) => {
  const {push} = useRouter();


  return (
    <Wrap>
      <LeftBlock>
        <Img src={performance.imgUrl} />
        <Title onClick={() => push(performance.link)}>
          &quot;{performance.title}&quot;
          <br />
          <DateText>{performance.date}</DateText>
        </Title>
      </LeftBlock>
      <RightBlock>
        <Description>{parse(performance.description)}</Description>
        <BuyWrap>
          <Type>{performance.type}</Type>
          <Button />
        </BuyWrap>
      </RightBlock>
    </Wrap>
  );
};

export default Performance;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #ffffff;
  padding: 8vh 0;
  color: white;
`;

const LeftBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  padding-right: 4vw;
`;

const Img = styled.img`
  width: 32vw;
  border-radius: 16px;
  margin-left: auto;
`;

const Title = styled.span`
  position: absolute;
  font-family: "namu-1910";
  font-size: 6vh;
  width: 36vw;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const DateText = styled.span`
  position: absolute;
  padding-top: 2vh;
  font-family: "namu-1750";
  font-size: 8vh;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2vh;
  color: #e0e0e0;
  p {
    margin: 0 auto 2vh;
  }
`;

const BuyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
  width: 100%;
`;

const Type = styled.span`
  font-family: "namu-1750";
  font-size: 1.6vh;
  text-transform: uppercase;
  width: 40%;
  color: #919191;
`;

import styled from "@emotion/styled";
import Button from "../../layout/Button";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  link: string;
};

const PerformanceInfo = ({ title, description, link }: Props) => {
  const { push } = useRouter();

  return (
    <InfoBlock>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BuyWrap>
        <Button text={"купити квитки"} />
        <Details onClick={() => push(link)}>Дізнатися більше</Details>
      </BuyWrap>
    </InfoBlock>
  );
};

export default PerformanceInfo;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8vw 12vh 4vw;
  width: 42vw;
`;

const Title = styled.span`
  font-family: "murmure";
  font-size: 8vh;
  padding: 4vh 0;
  text-align: center;
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2vh;
  text-align: center;
  color: #b5b5b5;
`;

const BuyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
  width: 100%;
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

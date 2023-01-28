import styled from "@emotion/styled";
import Button from "../../layout/Button";
import { useRouter } from "next/router";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type Props = {
  title: string;
  description: string;
  link: string;
};

const PerformanceInfo = ({ title, description, link }: Props) => {
  const { push } = useRouter();
  const { isDesktopWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BuyWrap>
        <Button text={isDesktopWidth ? "купити квитки" : "купити"} />
        <Details onClick={() => push(link)}>
          <Dot src="/icons/arrows/redDot.svg" />
          Дізнатись більше
        </Details>
      </BuyWrap>
    </Wrap>
  );
};

export default PerformanceInfo;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10vh 4vw 0;
  width: 42vw;
`;

export const Title = styled.span`
  font-family: "murmure";
  font-size: 8vh;
  padding: 4vh 0;
  text-align: center;
`;

const Description = styled.span`
  font-family: "namu-1750";
  font-size: 2.4vh;
  text-align: center;
  padding: 0 2vw;
  color: #b5b5b5;
`;

const BuyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  width: 100%;
`;

export const Details = styled.span<{ isCentered?: boolean }>`
  font-family: "namu-1400";
  margin-left: 2.4vw;
  font-size: 2vh;
  background: inherit;
  text-transform: uppercase;
  border-radius: 24px;
  width: 36%;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-top: ${({ isCentered }) => (isCentered ? "0" : "-4vh")};
    width: min-content;
    align-self: flex-end;
    text-transform: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const Dot = styled.img`
  height: 1vw;
  width: 1vw;
  margin-right: 1vw;
  @media (max-width: 960px) {
    height: 4vw;
    width: 4vw;
    margin-right: 3.6vw;
  }
`;

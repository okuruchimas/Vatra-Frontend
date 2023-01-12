import styled from "@emotion/styled";

type Props = {
  name: string;
  role: string;
  superPower?: string;
  url: string;
  isPower: boolean;
  index: number;
};

const PersonCard = (person: Props) => {
  return (
    <Wrap>
      {person.isPower && (
        <Row>
          <SuperPower>{person.role}</SuperPower>
          {person.superPower && <SuperPower>{person.superPower}</SuperPower>}
        </Row>
      )}
      <Photo
        isCentered={person.index === 1 || person.index === 2}
        isLast={person.index === 3}
        src={person.url}
        loading="lazy"
      />
      <Name isLast={person.index === 3}>{person.name}</Name>
    </Wrap>
  );
};

export default PersonCard;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20vw;
  span {
    z-index: 1;
  }
  @media (max-width: 960px) {
    width: 44vw;
  }
`;

const Name = styled.span<{ isLast: boolean }>`
  position: absolute;
  width: max-content;
  bottom: 2vh;
  font-family: "murmure";
  font-size: 3.6vh;
  color: #ffffff;
  padding-left: 2vw;

  @media (max-width: 960px) {
    font-family: "namu-1750";
    font-size: 2vh;
    width: 50%;
    padding-left: 4vw;
    bottom: ${({ isLast }) => (isLast ? "10vh" : "4vh")};
  }
`;
const Row = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const SuperPower = styled.span`
  font-family: "namu-pro";
  font-size: 2vh;
  color: #b11212;
  padding: 8px 12px 12px;
  border-radius: 24px;
  border: 1px solid #b11212;
  margin: 16px 8px;
`;

const Photo = styled.img<{ isCentered: boolean; isLast: boolean }>`
  border-radius: 24px;
  height: auto;
  width: 100%;
  object-fit: cover;
  position: relative;
  aspect-ratio: 5/6;

  @media (max-width: 960px) {
    aspect-ratio: ${({ isCentered }) => (isCentered ? "165/145" : "5/6")};
    bottom: ${({ isLast }) => (isLast ? "52px" : "initial")};
  }
`;

import styled from "@emotion/styled";

type Props = {
  name: string;
  role: string;
  superPower?: string;
  url: string;
};

const PersonCard = (person: Props) => {
  return (
    <Wrap>
      <Row>
        <SuperPower>{person.role}</SuperPower>
        {person.superPower && <SuperPower>{person.superPower}</SuperPower>}
      </Row>
      <Photo src={person.url} loading="lazy" />
      <Name>{person.name}</Name>
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
`;

const Name = styled.span`
  position: absolute;
  width: max-content;
  bottom: 2vh;
  //left: 2vw;
  font-family: "murmure";
  font-size: 3.6vh;
  color: #ffffff;
`;
const Row = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const SuperPower = styled.span`
  font-family: "namu-pro";
  font-size: 2vh;
  color: #b11212;
  padding: 8px 12px 12px;
  border-radius: 24px;
  border: 1px solid #b11212;
  margin: 16px 8px;
`;

const Photo = styled.img`
  border-radius: 24px;
  height: auto;
  width: 100%;
  object-fit: cover;
  position: relative;
  aspect-ratio: 5/6;
`;

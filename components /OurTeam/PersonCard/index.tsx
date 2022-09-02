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
      <Name>{person.name}</Name>
      <Role>{person.role}</Role>
      <SuperPower>Суперздібності</SuperPower>
      <Power>{person.superPower}</Power>
      <Photo src={person.url} />
    </Wrap>
  );
};

export default PersonCard;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 6vw;
  span {
    z-index: 1;
    position: relative;
    left: -6vw;
  }
`;

const Name = styled.span`
  font-family: "namu-1400";
  font-size: 6vh;
  color: #ffffff;
`;
const Role = styled.span`
  font-family: "namu-1750";
  font-size: 2.4vh;
  padding: 0.8vh 0;
  color: #bbbbbb;
`;
const SuperPower = styled.span`
  font-family: "namu-pro";
  font-size: 2vh;
  color: #b11212;
  padding-bottom: 0.8vh;
`;
const Power = styled.span`
  font-family: "namu-pro";
  font-size: 2vh;
  color: #ffffff;
`;
const Photo = styled.img`
  border-radius: 24px;
  height: 52vh;
  width: auto;
  position: relative;
  bottom: 12vh;
`;

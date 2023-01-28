import React from "react";
import Member from "../Member";
import { Composition } from "../TheaterPoster/performances";
import styled from "@emotion/styled";

interface Props {
  compositions: Composition[];
}

const PerformanceTeam = ({ compositions }: Props) => {
  return (
    <Wrap>
      <Title>Cклад</Title>
      <TeamMembers>
        {compositions.map((item) => (
          <Member key={item.name} name={item.name} abilities={item.abilities} />
        ))}
      </TeamMembers>
    </Wrap>
  );
};

export default PerformanceTeam;

const Wrap = styled.div`
  margin-top: 32vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-top: 12vh;
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-family: "namu-1400";
  font-size: 5vh;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 3vh;
  }
`;

const TeamMembers = styled.div`
  width: 64%;
  margin-top: 2vh;
  border-top: 2px solid #fff;
  @media (max-width: 960px) {
    margin-top: 7vh;
    width: 100%;
  }
`;

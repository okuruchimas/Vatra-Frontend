import React from "react";
import { SuperPower as Prop } from "../OurTeam/PersonCard";
import styled from "@emotion/styled";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  name: string;
  abilities: string[];
};

const Member = (member: Props) => {
  return (
    <Wrap>
      <Name>{member.name}</Name>
      <AbilitiesWrap>
        {member.abilities.map((item) => (
          <SuperPower key={item}> {item}</SuperPower>
        ))}
      </AbilitiesWrap>
    </Wrap>
  );
};

export default Member;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4vh 0;
  border-bottom: 2px solid #fff;
  @media (max-width: 960px) {
    padding: 1vh 0;
  }
`;

const Name = styled.span`
  font-family: "murmure";
  color: #eeeeee;
  font-size: 8vh;
  padding-bottom: 1vh;
  width: 50%;
  @media (max-width: 960px) {
    font-size: 2em;
  }
`;

const AbilitiesWrap = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  @media (max-width: 960px) {
    gap: 1vh;
  }
`;

const SuperPower = styled(Prop)`
  text-transform: uppercase;
  width: max-content;
  padding: 1vh 2vw;
  @media (max-width: 960px) {
    margin: 0;
    font-size: 1.2vh;
  }
`;

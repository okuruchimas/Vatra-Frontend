import React from "react";
import { SuperPower } from "../OurTeam/PersonCard";
import styled from "@emotion/styled";

type Props = {
  name: string;
  abilities: [string];
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
  padding: 2vh 0;
  border-bottom: 2px solid #fff;
`;
const Name = styled.span`
  font-family: "murmure";
  color: #9a9a9a;
  font-size: 6vh;
  padding-bottom: 1vh;
`;

const AbilitiesWrap = styled.div``;

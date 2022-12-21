import React from "react";
import { SuperPower as Prop } from "../OurTeam/PersonCard";
import styled from "@emotion/styled";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  name: string;
  abilities: [string];
};

const Member = (member: Props) => {
  const { width, maxMobileWidth } = useWindowDimensions();

  return (
    <Wrap>
      <Name>{member.name}</Name>
      <AbilitiesWrap>
        {width > maxMobileWidth ? (
          member.abilities.map((item) => (
            <SuperPower key={item}> {item}</SuperPower>
          ))
        ) : (
          <SuperPower> {member.abilities[0]}</SuperPower>
        )}
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
  @media (max-width: 960px) {
    font-size: 2em;
  }
`;
const SuperPower = styled(Prop)`
  @media (max-width: 960px) {
    margin: 0;
    text-transform: uppercase;
    font-size: 1.6vh;
  }
`;

const AbilitiesWrap = styled.div``;

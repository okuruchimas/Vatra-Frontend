import styled from "@emotion/styled";
import { TestArr } from "../../components /TheaterPoster";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RepertoirePreview from "../../components /RepertoirePreview";
import RedTitle from "../../components /layout/RedTitle";
import { TitleFragment } from "../../components /AboutUs";
import Member from "../../components /Member";
import parse from "html-react-parser";
import { Circle } from "../../components /JoinUs";
import { ArrowRight } from "../../components /OurTeam";

const Repertoire = () => {
  const {
    query: { id },
  } = useRouter();

  const [repertoire, setRepertoire] = useState<any>(undefined);

  useEffect(() => {
    setRepertoire(TestArr.find(({ link }) => link === id));
  }, [id]);

  if (!repertoire) return;
  return (
    <Wrap>
      <RepertoirePreview
        title={repertoire.title}
        type={repertoire.type}
        date={repertoire.date}
      />
      <DetailWrap>
        <RedTitle text="опис  вистави" />
        <TitleFragment>{repertoire.largeDescription.bigTitle1}</TitleFragment>
        {repertoire.largeDescription.bigTitle2 && (
          <TitleFragment last>
            {repertoire.largeDescription.bigTitle2}
          </TitleFragment>
        )}
        <InfoWrap>
          <DescriptionWrap>
            <DescriptionTitle>
              {repertoire.largeDescription.smallTitle}
            </DescriptionTitle>
            <Description>
              {parse(repertoire.largeDescription.description)}
            </Description>
            <Button>
              <ArrowRight src="/icons/arrows/arrowRight.svg" />
              <Circle isEmpty />
            </Button>
          </DescriptionWrap>
          <PhotosWrap>
            {/*{repertoire.largeDescription.images.map((link: string) => (*/}
            {/*  <Photo key={link} style={{ backgroundImage: `url(${link})` }} />*/}
            {/*))}*/}
            <Photo link={repertoire.largeDescription.images[0]} />
          </PhotosWrap>
        </InfoWrap>
      </DetailWrap>
      <TeamInfo>
        <TitleTeam>Cклад</TitleTeam>
        <TeamMembers>
          {repertoire.largeDescription.composition.map(
            (item: { name: string; abilities: [string] }) => (
              <Member
                key={item.name}
                name={item.name}
                abilities={item.abilities}
              />
            )
          )}
        </TeamMembers>
      </TeamInfo>
      <DateText>
        <EmptyText>Прем&lsquo;єра — </EmptyText>21 травня 2022
      </DateText>
    </Wrap>
  );
};

export default Repertoire;

const Wrap = styled.div`
  padding: 0 4vw 9vh;
  width: 100vw;
`;

const DetailWrap = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescriptionWrap = styled.div`
  width: 48%;
`;

const DescriptionTitle = styled.span`
  text-transform: uppercase;
  font-family: "namu-1400";
  font-size: 3.2vh;
  margin-bottom: 4vh;
  color: #fff;
`;

const Description = styled.div`
  p {
    font-family: "namu-1750";
    font-size: 2.4vh;
    padding: 0 2vw;
    color: #b5b5b5;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: min-content;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    img {
      transform: translatex(32px);
      z-index: 1;
    }
  }
`;

const PhotosWrap = styled.div``;

const Photo = styled.div<{ link: string }>`
  width: 24vw;
  background-image: ${({ link }) => `url(${link})`};
  border-radius: 12px;
  background-size: cover;
  aspect-ratio: 600/900;
  background-position: center;
`;

const TeamInfo = styled.div`
  margin-top: 16vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleTeam = styled.span`
  font-family: "namu-1400";
  font-size: 4vh;
  text-transform: uppercase;
`;

const TeamMembers = styled.div`
  width: 64%;
  margin-top: 3vh;
  border-top: 2px solid #fff;
`;

const EmptyText = styled.span`
  font-family: "murmure";
  font-size: 40vh;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
`;

const DateText = styled.span`
  font-family: "namu-1400";
  text-transform: uppercase;
  font-size: 32vh;
`;

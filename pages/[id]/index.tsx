import styled from "@emotion/styled";
import RepertoirePreview from "../../components /RepertoirePreview";
import Member from "../../components /Member";
import PerformanceDetail from "../../components /TheaterPoster/PerformanceDetails";
import {
  PerformanceType,
  TestArr,
} from "../../components /TheaterPoster/performances";
import Footer from "../../components /layout/Footer";

const Repertoire = ({ repertoire }: { repertoire: PerformanceType }) => {
  if (!repertoire?.largeDescription) return;

  return (
    <Wrap>
      <RepertoirePreview
        title={repertoire.title}
        type={repertoire.type}
        date={repertoire.date}
        imgUrl={repertoire.largeDescription.imgUrl}
      />
      <PerformanceDetail
        bigTitle1={repertoire.largeDescription.bigTitle1}
        bigTitle2={repertoire.largeDescription.bigTitle2}
        smallTitle={repertoire.largeDescription.smallTitle}
        description={repertoire.largeDescription.description}
        images={repertoire.largeDescription.images}
      />

      <TeamInfo>
        <TitleTeam>Cклад</TitleTeam>
        <TeamMembers>
          {repertoire.largeDescription.composition.map((item) => (
            <Member
              key={item.name}
              name={item.name}
              abilities={item.abilities}
            />
          ))}
        </TeamMembers>
      </TeamInfo>
      <DateText>
        <EmptyText>Прем&lsquo;єра — </EmptyText>21 травня 2022
      </DateText>
      <Footer />
    </Wrap>
  );
};

export async function getStaticPaths() {
  const paths = TestArr.map((el) => {
    return { params: { id: el.link } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const repertoire = TestArr.find(({ link }) => link === params.id);
  return {
    props: {
      repertoire,
    },
  };
}

export default Repertoire;

const Wrap = styled.div`
  padding: 0 4vw;
  width: 100vw;
`;

const TeamInfo = styled.div`
  margin-top: 24vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-top: 12vh;
    flex-direction: column;
  }
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
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const DateText = styled.div`
  margin-top: 20vh;
  font-family: "namu-1400";
  text-transform: uppercase;
  font-size: 32vh;
  text-align: right;
  @media (max-width: 960px) {
    margin-top: 12vh;
    font-size: 3.6em;
  }
`;

const EmptyText = styled.span`
  font-family: "murmure";
  font-size: 34vh;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  @media (max-width: 960px) {
    font-size: 1em;
  }
`;

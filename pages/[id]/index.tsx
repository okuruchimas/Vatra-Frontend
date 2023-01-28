import styled from "@emotion/styled";
import RepertoirePreview from "../../components /RepertoirePreview";
import PerformanceDetail from "../../components /PerformanceDetails";
import {
  PerformanceType,
  TestArr,
} from "../../components /TheaterPoster/performances";
import Footer from "../../components /layout/Footer";
import PerformanceTeam from "../../components /PerformanceTeam";

const Repertoire = ({ repertoire }: { repertoire: PerformanceType }) => {
  if (!repertoire?.largeDescription) return null;

  return (
    <Wrap>
      <RepertoirePreview
        title={repertoire.title}
        type={repertoire.type}
        date={repertoire.date}
        imgUrl={repertoire.largeDescription.imgUrl}
        dates={repertoire.largeDescription.dates}
        videoLink={repertoire.largeDescription.videoLink}
        remarks={repertoire.largeDescription.videoRemarks}
      />

      <PerformanceDetail
        bigTitle1={repertoire.largeDescription.bigTitle1}
        bigTitle2={repertoire.largeDescription.bigTitle2}
        smallTitle={repertoire.largeDescription.smallTitle}
        description={repertoire.largeDescription.description}
        images={repertoire.largeDescription.images}
      />

      <PerformanceTeam compositions={repertoire.largeDescription.composition} />

      <DateText>
        <EmptyText>Прем&lsquo;єра — </EmptyText>
        {repertoire.largeDescription.premiere}
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
  const { id } = params;
  const repertoire = TestArr.find(({ link }) => link === id);

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

const DateText = styled.div`
  margin-top: 28vh;
  font-family: "namu-1400";
  text-transform: uppercase;
  font-size: 28vh;
  line-height: 28vh;
  text-align: right;
  @media (max-width: 960px) {
    margin: 12vh 0 2vh;
    font-size: 3.6em;
    line-height: 8vh;
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

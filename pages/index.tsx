import styled from "@emotion/styled";
import Header from "../components /layout/Header";
import Footer from "../components /layout/Footer";
import Seo from "../components /Seo";
import Sections from "../components /layout/Sections";

const Home = () => {
  return (
    <Wrap>
      <Seo />
      <Header />
      <Sections />
      <Footer />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  z-index: 4;
`;

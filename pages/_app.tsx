import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Seo from "../components /Seo";
import Header from "../components /layout/Header";
import Footer from "../components /layout/Footer";
import styled from "@emotion/styled";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrap>
      <Seo />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  z-index: 4;
`;

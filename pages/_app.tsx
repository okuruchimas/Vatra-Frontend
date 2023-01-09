import type { AppProps } from "next/app";
import Seo from "../components /Seo";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrap>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            padding: 0;
            margin: 0;
          }

          body {
            -moz-background-image: url("/icons/gradients/dottBackground.svg");
            -webkit-background-image: url("/icons/gradients/dottBackground.svg");
            background-image: url("/icons/gradients/dottBackground.svg");

            background-color: #181818;
            color: white;
          }

          span {
            z-index: 1;
          }

          ::-webkit-scrollbar {
            width: 0;
          }

          @font-face {
            font-family: "namu-pro";
            src: url("/fonts/namu/NAMU-Pro.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1400";
            src: url("/fonts/namu/NAMU-1400.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1600";
            src: url("/fonts/namu/NAMU-1600.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1750";
            src: url("/fonts/namu/NAMU-1750.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1850";
            src: url("/fonts/namu/NAMU-1850.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1910";
            src: url("/fonts/namu/NAMU-1910.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1930";
            src: url("/fonts/namu/NAMU-1930.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1960";
            src: url("/fonts/namu/NAMU-1960.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "namu-1990";
            src: url("/fonts/namu/NAMU-1990.ttf");
            font-display: swap;
          }

          @font-face {
            font-family: "murmure";
            src: url("/fonts/murmure/murmure-regular.ttf");
            font-display: swap;
          }
        `}
      />
      <Seo />
      <Component {...pageProps} />
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

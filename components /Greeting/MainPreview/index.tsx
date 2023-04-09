import styled from "@emotion/styled";
import { fadeInUp } from "react-animations";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const fadeInUpAnimation = keyframes`${fadeInUp}`;

const MainPreview = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <Wrap>
      <ImgWrap>
        <Img
          src={
            isDesktop ? "/icons/logo/preview.gif" : "/icons/logo/previewMob.gif"
          }
          layout="fill"
          priority
        />
      </ImgWrap>
    </Wrap>
  );
};

export default MainPreview;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 45px;
  width: 92vw;
  padding: 2vw 0;
  @media (max-width: 960px) {
    animation: 1s ${fadeInUpAnimation};
    padding: 4vw 0;
    border-radius: 30px;
    aspect-ratio: 350/313;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  width: 88vw;
  aspect-ratio: 1690/887;
  @media (max-width: 960px) {
    width: 80vw;
    aspect-ratio: 302/265;
  }
`;

const Img = styled(Image)`
  border-radius: 30px;
  outline: none;
  object-fit: cover;
`;

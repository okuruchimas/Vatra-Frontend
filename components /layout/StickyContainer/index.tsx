import React, { useState } from "react";
import View from "./type";
import useDocumentScrollThrottled from "../../../hooks/useDocumentScroll";
import styled from "@emotion/styled";

const StickyContainer = ({ children }: Props) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 300;

  useDocumentScrollThrottled(
    (callbackData: { previousScrollTop: any; currentScrollTop: any }) => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setShouldShowShadow(currentScrollTop > 2);

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    }
  );
  return (
    <Wrap show={shouldShowShadow} hide={shouldHideHeader}>
      {children}
    </Wrap>
  );
};

interface Props {
  children: View;
}

export default StickyContainer;

const Wrap = styled.div<{ show: any; hide: any }>`
  & > div {
    transform: ${({ hide }) => `translateY(${hide ? -110 : 0}%)`};
    transition: transform 0.2s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: ${({ show }) =>
      show ? "0 9px 9px -9px rgba(0, 0, 0, 0.13);" : "none"};
  }
`;

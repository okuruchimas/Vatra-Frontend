import styled from "@emotion/styled";

const Arrow = () => {
  return (
    <Wrap>
      <ArrowR height="auto" width="76" src="/icons/arrowRight.svg" /> <Circle />
    </Wrap>
  );
};

export default Arrow;

const ArrowR = styled.img`
  position: relative;
  top: 4px;
  left: 0;
  display: block;
  transition: left 0.4s ease;
  z-index: 10;
`;

const Wrap = styled.div`
  cursor: pointer;
  width: 80px;
  height: 60px;
  padding: 20px 0;
  &:hover {
    img:first-of-type {
      transition: left 0.4s ease;
      left: 12px;
    }
    div:last-of-type {
      background: #b11212;
    }
  }
`;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  position: relative;
  left: 44px;
  bottom: 28px;
`;

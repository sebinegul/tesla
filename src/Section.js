import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  title,
  description,
  leftBtnTxt,
  rightBtnTxt,
  backgroundImage,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
     <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Buttonss>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton>{leftBtnTxt}</LeftButton>
          {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttonss>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
  position: relative;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(60px);
  opacity: 0.9;
  color: #ffffff;
  border-radius: 50px;
  width: 275px;
  height: 40px;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: rgba(242, 242, 242, 0.4);
  color: #000000;
`;

const DownArrow = styled.img`
  margin-top: 1px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Buttonss = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

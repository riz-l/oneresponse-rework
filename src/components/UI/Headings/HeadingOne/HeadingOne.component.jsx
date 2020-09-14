// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Icon
import Icon from "../../Icon/Icon.component";

// Heading: HeadingOne
function HeadingOne({ text, icon }) {
  return (
    <HeadingOneContainer>
      <HeadingOneWrapper>
        <Icon icon={icon} />
        <HeadingOneText>{text}</HeadingOneText>
      </HeadingOneWrapper>
    </HeadingOneContainer>
  );
}

// Export: HeadingOne
export default HeadingOne;

// Styled: HeadingOneContainer
const HeadingOneContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
`;

// Styled: HeadingOneWrapper
const HeadingOneWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  & i {
    color: #414141;
    font-size: 2rem;
    margin-right: 10px;
  }
`;

// Styled: HeadingOneText
const HeadingOneText = styled.h1`
  color: #414141;
  font-size: 2rem;
`;

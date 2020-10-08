// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Icon
import Icon from "../../Icon/Icon.component";

// Heading: HeadingOne
function HeadingOne({
  icon,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  text,
}) {
  return (
    <HeadingOneContainer
      style={{
        margin: `${margin}`,
        marginTop: `${marginTop}`,
        marginRight: `${marginRight}`,
        marginBottom: `${marginBottom}`,
        marginLeft: `${marginLeft}`,
        padding: `${padding}`,
        paddingTop: `${paddingTop}`,
        paddingRight: `${paddingRight}`,
        paddingBottom: `${paddingBottom}`,
        paddingLeft: `${paddingLeft}`,
      }}
    >
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
  margin: 1rem 0;
`;

// Styled: HeadingOneWrapper
const HeadingOneWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  & i {
    color: #414141;
    font-size: 1.6rem;
    margin-right: 10px;
    visibility: visible;

    @media screen and (max-width: 614px) {
      display: none;
      visibility: hidden;
    }
  }
`;

// Styled: HeadingOneText
const HeadingOneText = styled.h1`
  color: #414141;
  font-size: 1.6rem;
`;

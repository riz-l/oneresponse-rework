// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingThree
function HeadingThree({
  text,
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
}) {
  return (
    <HeadingThreeText
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
      {text}
    </HeadingThreeText>
  );
}

// Export: HeadingThree
export default HeadingThree;

// Styled: HeadingThreeText
const HeadingThreeText = styled.h3`
  color: #414141;
  padding-bottom: 0.4rem;
`;

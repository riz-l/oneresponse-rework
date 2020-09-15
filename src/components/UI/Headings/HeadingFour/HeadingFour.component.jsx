// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingFour
function HeadingFour({
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
    <HeadingFourText
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
    </HeadingFourText>
  );
}

// Export: HeadingFour
export default HeadingFour;

// Styled: HeadingFourText
const HeadingFourText = styled.h4`
  color: #414141;
  padding-bottom: 0.4rem;
`;

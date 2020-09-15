// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingTwo
function HeadingTwo({
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
    <HeadingTwoText
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
    </HeadingTwoText>
  );
}

// Export: HeadingTwo
export default HeadingTwo;

// Styled: HeadingTwoText
const HeadingTwoText = styled.h2`
  color: #414141;
  padding-bottom: 0.4rem;
`;

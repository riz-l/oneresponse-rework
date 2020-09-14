// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingTwo
function HeadingTwo({ text, marginTop, marginBottom }) {
  return (
    <HeadingTwoText
      style={{ marginTop: `${marginTop}`, marginBottom: `${marginBottom}` }}
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

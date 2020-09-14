// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingFour
function HeadingFour({ text, marginTop, marginBottom }) {
  return (
    <HeadingFourText
      style={{ marginTop: `${marginTop}`, marginBottom: `${marginBottom}` }}
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

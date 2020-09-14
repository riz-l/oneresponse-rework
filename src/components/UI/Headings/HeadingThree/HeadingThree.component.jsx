// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingThree
function HeadingThree({ text, marginTop, marginBottom }) {
  return (
    <HeadingThreeText
      style={{ marginTop: `${marginTop}`, marginBottom: `${marginBottom}` }}
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

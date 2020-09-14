// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingThree
function HeadingThree({ text }) {
  return <HeadingThreeText>{text}</HeadingThreeText>;
}

// Export: HeadingThree
export default HeadingThree;

// Styled: HeadingThreeText
const HeadingThreeText = styled.h3`
  color: #414141;
`;

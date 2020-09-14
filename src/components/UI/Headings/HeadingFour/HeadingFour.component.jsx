// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingFour
function HeadingFour({ text }) {
  return <HeadingFourText>{text}</HeadingFourText>;
}

// Export: HeadingFour
export default HeadingFour;

// Styled: HeadingFourText
const HeadingFourText = styled.h4`
  color: #414141;
`;

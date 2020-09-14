// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Heading: HeadingTwo
function HeadingTwo({ text }) {
  return <HeadingTwoText>{text}</HeadingTwoText>;
}

// Export: HeadingTwo
export default HeadingTwo;

// Styled: HeadingTwoText
const HeadingTwoText = styled.h2`
  color: #414141;
`;

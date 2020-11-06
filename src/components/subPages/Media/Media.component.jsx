// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
// import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
// import HeadingFour from "../../UI/Headings/HeadingFour/HeadingFour.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";

// subPage: Media
function Media() {
  return (
    <MediaContainer>
      <MediaHeadingContainer>
        <HeadingOne
          icon="fas fa-camera"
          text="Media"
          padding="0.6rem"
        />
      </MediaHeadingContainer>
      <ReportContainer>
        <HeadingTwo text="Currently under construction..." />
      </ReportContainer>
    </MediaContainer>
  );
}

// Export: Media
export default Media;

// Styled: MediaContainer
const MediaContainer = styled.div`
  background: #ffffff;
  margin: 1rem;
`;

// Styled: MediaHeadingContainer
const MediaHeadingContainer = styled.div`
  background: #e0e0e0;
  width: 100%;
`;

// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import HeadingFour from "../../UI/Headings/HeadingFour/HeadingFour.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";

// subPage: Sbar
function Sbar() {
  return (
    <SbarContainer>
      <ReportContainer>
        <HeadingOne icon="fas fa-laptop-medical" text="SBAR" />
        <HeadingTwo text="Heading 2" />
        <HeadingThree text="Heading 3" />
        <HeadingFour text="Heading 4" />
      </ReportContainer>
    </SbarContainer>
  );
}

// Export: Sbar
export default Sbar;

// Styled: SbarContainer
const SbarContainer = styled.div`
  margin: 0rem;
`;

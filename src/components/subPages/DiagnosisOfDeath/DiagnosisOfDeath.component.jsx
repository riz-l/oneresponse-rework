// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import HeadingFour from "../../UI/Headings/HeadingFour/HeadingFour.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";

// subPage: DiagnosisOfDeath
function DiagnosisOfDeath() {
  return (
    <DiagnosisOfDeathContainer>
      <ReportContainer>
        <HeadingOne icon="fas fa-procedures" text="Diagnosis Of Death" />
        <HeadingTwo text="Heading 2" />
        <HeadingThree text="Heading 3" />
        <HeadingFour text="Heading 4" />
      </ReportContainer>
    </DiagnosisOfDeathContainer>
  );
}

// Export: DiagnosisOfDeath
export default DiagnosisOfDeath;

// Styled: DiagnosisOfDeathContainer
const DiagnosisOfDeathContainer = styled.div`
  margin: 1rem;
`;

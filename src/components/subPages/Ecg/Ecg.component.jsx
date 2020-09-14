// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import HeadingFour from "../../UI/Headings/HeadingFour/HeadingFour.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";

// subPage: Ecg
function Ecg() {
  return (
    <EcgContainer>
      <ReportContainer>
        <HeadingOne icon="fas fa-heartbeat" text="ECG" />
        <HeadingTwo text="Heading 2" />
        <HeadingThree text="Heading 3" />
        <HeadingFour text="Heading 4" />
      </ReportContainer>
    </EcgContainer>
  );
}

// Export: Ecg
export default Ecg;

// Styled: EcgContainer
const EcgContainer = styled.div`
  background: #ffffff;
  margin: 1rem;
`;

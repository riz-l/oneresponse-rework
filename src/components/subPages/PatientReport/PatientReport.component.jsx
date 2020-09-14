// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import HeadingFour from "../../UI/Headings/HeadingFour/HeadingFour.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";
import ReportField from "../../UI/ReportField/ReportField.component";

// subPage: PatientReport
function PatientReport({
  selectedPatient,
  patientDetailsData,
  nokData,
  specialistPathwayData,
  majorTraumaData,
  manchesterTriageSystemData,
  pathfindersData,
  jointDecisionMakingData,
  cardiacChestPainData,
  strokeAssessmentData,
  cardiacArrestData,
  patientIVData,
  drugsMedsData,
  skeletalTraumaData,
  burnsData,
  transportOptionsData,
  airwaysManagementData,
}) {
  return (
    <PatientReportContainer>
      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Patient Details" />
        <HeadingTwo text="Heading 2" />
        <HeadingThree text="Heading 3" />
        <HeadingFour text="Heading 4" />
        <ReportField field="Fuck" data="me" />
      </ReportContainer>
    </PatientReportContainer>
  );
}

// Export: PatientReport
export default PatientReport;

// Styled: PatientReportContainer
const PatientReportContainer = styled.div`
  margin: 1rem;
`;

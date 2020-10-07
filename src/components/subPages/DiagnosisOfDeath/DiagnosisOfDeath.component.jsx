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

// subPage: DiagnosisOfDeath
function DiagnosisOfDeath({ selectedPatient, diagnosisOfDeathData }) {
  //#region diagnosisOfDeathRender = Diagnosis of Death report #TODO - Needs testing
  const diagnosisOfDeathRender = diagnosisOfDeathData.map(
    ({ id, DoD_Time, Privacy, Confirmed, Police }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="Diagnosis of Death Timed At"
              data={DoD_Time ? DoD_Time : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="Privacy"
              data={Privacy ? Privacy : "Not recorded"}
            />
            <ReportField
              field="Diagnosis of Death Confirmed By"
              data={Confirmed ? Confirmed : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="Police / Coroner"
              data={Police ? Police : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /diagnosisOfDeathRender = Diagnosis of Death report

  return (
    <DiagnosisOfDeathContainer>
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-sticky-note"
            text="Diagnosis of Death"
            padding="1rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? diagnosisOfDeathRender
            : "Diagnosis of Death data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>
    </DiagnosisOfDeathContainer>
  );
}

// Export: DiagnosisOfDeath
export default DiagnosisOfDeath;

// Styled: DiagnosisOfDeathContainer
const DiagnosisOfDeathContainer = styled.div`
  margin: 1rem;
`;

// Styled: DiagnosisOfDeathSection
const DiagnosisOfDeathSection = styled.section`
  background: #ffffff;
  margin-bottom: 1rem;
`;

// Styled: DiagnosisOfDeathRender
const DiagnosisOfDeathRender = styled.div`
  padding: 1rem 0;
`;

// Styled: DiagnosisOfDeathGrid
const DiagnosisOfDeathGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100%;
  width: 100%;
`;

// Styled: DiagnosisOfDeathTableGrid
const DiagnosisOfDeathTableGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
  height: 100%;
  width: 100%;
`;

// Styled: DiagnosisOfDeathColumn
const DiagnosisOfDeathColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

// Styled: DiagnosisOfDeathHeadingContainer
const DiagnosisOfDeathHeadingContainer = styled.div`
  background: #e0e0e0;
  width: 100%;
`;

// Styled: DiagnosisOfDeathAddressContainer
const DiagnosisOfDeathAddressContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

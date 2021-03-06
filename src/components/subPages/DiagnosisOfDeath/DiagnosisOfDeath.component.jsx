// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";
import ReportField from "../../UI/ReportField/ReportField.component";

// subPage: DiagnosisOfDeath
function DiagnosisOfDeath({ selectedPatient, diagnosisOfDeathData, loading }) {
  //#region diagnosisOfDeathRender = Diagnosis of Death report #TODO - Needs testing
  const diagnosisOfDeathRender = diagnosisOfDeathData.map(
    ({ id, DoD_Time, Privacy, Confirmed }) => (
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
            <></>
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /diagnosisOfDeathRender = Diagnosis of Death report

  //#region factorsToConfirmRender = Factors to confirm report #TODO - Needs testing
  const factorsToConfirmRender = diagnosisOfDeathData.map(
    ({ id, DoD_Onset, DoD_CPR, DoD_ECG }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="&gt; 15 minutes since the onset of collapse"
              data={DoD_Onset ? DoD_Onset : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="Asystole for &gt; 30 seconds on the ECG monitor"
              data={DoD_CPR ? DoD_CPR : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="No effective CPR prior to arrival of ambulance"
              data={DoD_ECG ? DoD_ECG : "Not recorded"}
              marginBottom="2rem"
            />
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
        <HeadingThree text="All of the above MUST be confirmed" />
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /factorsToConfirmRender = Factors to Confirm report

  //#region advanceDecisionsToRefuseRender = Advance Decisions to Refuse Treatment report #TODO - Needs testing
  const advanceDecisionsToRefuseRender = diagnosisOfDeathData.map(
    ({ id, Decision }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="Decision"
              data={Decision ? Decision : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /advanceDecisionsToRefuseRender = Advance Decisions to Refuse Treatment report

  //#region terminationofResuscitationRender = Termination of Resuscitation report #TODO - Needs testing
  const terminationofResuscitationRender = diagnosisOfDeathData.map(
    ({
      id,
      DoD_Chest,
      DoD_Circulatory,
      DoD_Pulse,
      DoD_ALS,
      DoD_Airway,
      DoD_Admin,
      DoD_Respiration,
    }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="Continuous chest compressions"
              data={DoD_Chest ? DoD_Chest : "Not recorded"}
            />
            <ReportField
              field="Circulatory Access (IV or IO)"
              data={DoD_Circulatory ? DoD_Circulatory : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="No palpable pulse"
              data={DoD_Pulse ? DoD_Pulse : "Not recorded"}
            />
            <ReportField
              field="20 minutes of Asystole. Printed ECG for &gt; 30 seconds"
              data={DoD_ALS ? DoD_ALS : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="Secured Airway (supraglottic or ET)"
              data={DoD_Airway ? DoD_Airway : "Not recorded"}
            />
            <ReportField
              field="Where appropriate, IV/IO admin of at least 4 x 1mg adrenaline and amiodarone"
              data={DoD_Admin ? DoD_Admin : "Not recorded"}
            />
            <ReportField
              field="No signs of respiration"
              data={DoD_Respiration ? DoD_Respiration : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /terminationofResuscitationRender = Termination of Resuscitation report

  //#region conditionsUnequivocallyAssociatedRender = Conditions unequivically Associated With Death report #TODO - Needs testing
  const conditionsUnequivocallyAssociatedRender = diagnosisOfDeathData.map(
    ({ id, Condition }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="Condition"
              data={Condition ? Condition : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /conditionsUnequivocallyAssociatedRender = Conditions unequivically Associated With Death report

  //#region expectedDeathRender = Expected Death report #TODO - Needs testing
  const expectedDeathRender = diagnosisOfDeathData.map(
    ({ id, DoD_Terminal, Terminal_Illness }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="Expected Death due to terminal illness"
              data={DoD_Terminal ? DoD_Terminal : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="Explanation"
              data={Terminal_Illness ? Terminal_Illness : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <></>
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /expectedDeathRender = Expected Death report

  //#region attendanceAndRelativesRender = Attendance and Relatives report #TODO - Needs testing
  const attendanceAndRelativesRender = diagnosisOfDeathData.map(
    ({
      id,
      Police,
      Terminal_Additional,
      GP,
      Relative,
      DoD_Leaflet,
      DoD_Disability,
    }) => (
      <DiagnosisOfDeathRender key={id}>
        <DiagnosisOfDeathGrid>
          <DiagnosisOfDeathColumn>
            <ReportField
              field="Police Attendance"
              data={Police ? Police : "Not recorded"}
            />
            <ReportField
              field="Details of Police involvement"
              data={Terminal_Additional ? Terminal_Additional : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="GP Attendance"
              data={GP ? GP : "Not recorded"}
            />
            <ReportField
              field="Relatives Attendance"
              data={Relative ? Relative : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>

          <DiagnosisOfDeathColumn>
            <ReportField
              field="Bereavement Leaflet provided and consider religious support"
              data={DoD_Leaflet ? DoD_Leaflet : "Not recorded"}
            />
            <ReportField
              field="Did the Patient have a known learning disability? If yes, inform support centre"
              data={DoD_Disability ? DoD_Disability : "Not recorded"}
            />
          </DiagnosisOfDeathColumn>
        </DiagnosisOfDeathGrid>
      </DiagnosisOfDeathRender>
    )
  );
  //#endregion /attendanceAndRelatives = Attendance and Relatives report

  return (
    <DiagnosisOfDeathContainer>
      {/* Diagnosis of Death */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Diagnosis of Death"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? diagnosisOfDeathRender
            : "Diagnosis of Death data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>

      {/* Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning) */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? factorsToConfirmRender
            : "Factors to Confirm... data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>

      {/* Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? advanceDecisionsToRefuseRender
            : "Advance Decisions to Refuse... data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>

      {/* Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? terminationofResuscitationRender
            : "Termination of Resuscitation... data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>

      {/* Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing) */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing)"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? conditionsUnequivocallyAssociatedRender
            : "Conditions Unequivocally Associated... data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>

      {/* Expected Death Due to Illness or Pre-Existing Condition */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Expected Death Due to Illness or Pre-Existing Condition"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? expectedDeathRender
            : "Expected Death... data not recorded"}
        </ReportContainer>
      </DiagnosisOfDeathSection>

      {/* Attendance and Relatives */}
      <DiagnosisOfDeathSection>
        <DiagnosisOfDeathHeadingContainer>
          <HeadingOne
            icon="fas fa-procedures"
            text="Attendance and Relatives"
            padding="0.6rem"
          />
        </DiagnosisOfDeathHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : diagnosisOfDeathData && diagnosisOfDeathData.length > 0
            ? attendanceAndRelativesRender
            : "Attendance and Relatives data not recorded"}
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

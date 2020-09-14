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
  //#region nokRender = Next of Kin report
  const nokRender = nokData.map(
    ({
      Master_ePR_ID,
      NoK_Forename,
      NoK_Surname,
      NoK_Relation,
      NoK_Contact,
      GPName,
      GPAddressLine1,
      GPAddressLine2,
      GPAddressLine3,
      GPAddressLine4,
      GPPostcode,
      GPName_Other,
    }) => (
      <React.Fragment key={Master_ePR_ID}>
        <PatientReportColumn>
          <HeadingTwo text="Next of Kin" />
          <ReportField
            field="Forename"
            data={NoK_Forename ? NoK_Forename : "Not recorded"}
          />
          <ReportField
            field="Surname"
            data={NoK_Surname ? NoK_Surname : "Not recorded"}
          />
          <ReportField
            field="Relationship to Patient"
            data={NoK_Relation ? NoK_Relation : "Not recorded"}
          />
          <ReportField
            field="Contact Number"
            data={NoK_Contact ? NoK_Contact : "Not recorded"}
          />

          <HeadingTwo text="Patient GP" marginTop="2rem" />
          <ReportField
            field="GP Surgery Name"
            data={GPName ? GPName : "Not recorded"}
          />
          <ReportField
            field="GP Surgery Address"
            data={
              GPAddressLine1 ||
              GPAddressLine2 ||
              GPAddressLine3 ||
              GPAddressLine4 ||
              GPPostcode ? (
                <>
                  {GPAddressLine1}
                  {GPAddressLine2}
                  {GPAddressLine3}
                  {GPAddressLine4}
                  {GPPostcode}
                </>
              ) : (
                "Not recorded"
              )
            }
          />
          <ReportField
            field="Other"
            data={GPName_Other ? GPName_Other : "Not recorded"}
          />
        </PatientReportColumn>
      </React.Fragment>
    )
  );
  //#endregion /nokRender = Next of Kin report

  //#region patientDetailsRender = Patient Details report
  const patientDetailsRender = patientDetailsData.map(
    ({
      Master_ePR_ID,
      PD_Firstname,
      PD_Surname,
      PD_DOB,
      PD_Age_Yrs,
      PD_Age_Mths,
      PD_Gender,
      PD_NHS_No,
      PD_Ethnicity,
      PD_Weight,
      PD_Telephone,
      PD_Housenum,
      PD_Add1,
      PD_Add2,
      PD_Add3,
      PD_Postcode,
      PD_Patient_Allergy,
      PD_Allergy,
      PD_Patient_Meds,
      PD_Medication,
    }) => (
      <React.Fragment key={Master_ePR_ID}>
        <HeadingTwo text="Patient Details" />
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Forename"
              data={PD_Firstname ? PD_Firstname : "Not recoded"}
            />
            <ReportField
              field="Surname"
              data={PD_Surname ? PD_Surname : "Not recoded"}
            />
            <ReportField
              field="Date of Birth"
              data={PD_DOB ? PD_DOB : "Not recoded"}
            />
            <ReportField
              field="Age (Years)"
              data={PD_Age_Yrs ? PD_Age_Yrs : "Not recoded"}
            />
            <ReportField
              field="Age (Months)"
              data={PD_Age_Mths ? PD_Age_Mths : "Not recoded"}
            />
            <ReportField
              field="Gender"
              data={PD_Gender ? PD_Gender : "Not recoded"}
            />
            <ReportField
              field="NHS Number"
              data={PD_NHS_No ? PD_NHS_No : "Not recoded"}
            />
            <ReportField
              field="Ethnicity"
              data={PD_Ethnicity ? PD_Ethnicity : "Not recoded"}
            />
            <ReportField
              field="Weight (kg)"
              data={PD_Weight ? PD_Weight : "Not recoded"}
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Telephone"
              data={PD_Telephone ? PD_Telephone : "Not recoded"}
            />
            <ReportField
              field="Address"
              data={
                PD_Housenum || PD_Add1 || PD_Add2 || PD_Add3 || PD_Postcode ? (
                  <>
                    {PD_Housenum}
                    {PD_Add1}
                    {PD_Add2}
                    {PD_Add3}
                    {PD_Postcode}
                  </>
                ) : (
                  "Not recorded"
                )
              }
            />
            <ReportField
              field="Does the Patient have allergies?"
              data={PD_Patient_Allergy ? PD_Patient_Allergy : "Not recoded"}
            />
            <ReportField
              field="Allergies?"
              data={PD_Allergy ? PD_Allergy : "Not recoded"}
            />
            <ReportField
              field="Does the Patient take medication?"
              data={PD_Patient_Meds ? PD_Patient_Meds : "Not recoded"}
            />
            <ReportField
              field="Medications?"
              data={PD_Medication ? PD_Medication : "Not recoded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>{nokRender}</PatientReportColumn>
        </PatientReportGrid>
      </React.Fragment>
    )
  );
  //#endregion /patientDetailsRender = Patient Details report

  return (
    <PatientReportContainer>
      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Patient Details" />
        {selectedPatient === null
          ? "Please select a Patient from the Patient list"
          : patientDetailsRender}
      </ReportContainer>
    </PatientReportContainer>
  );
}

// Export: PatientReport
export default PatientReport;

// Styled: PatientReportContainer
const PatientReportContainer = styled.div`
  margin: 0rem;
`;

// Styled: PatientReportGrid
const PatientReportGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 100%;
  width: 100%;
`;

// Styled: PatientReportColumn
const PatientReportColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

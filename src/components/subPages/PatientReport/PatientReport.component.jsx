// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";
import ReportField from "../../UI/ReportField/ReportField.component";

// subPage: PatientReport
function PatientReport({
  selectedPatient,
  cadDetailsData,
  patientDetailsData,
  nokData,
  clinicalObservationsData,
  patientIVData,
  drugsMedsData,
  cardiacChestPainData,
  strokeAssessmentData,
  airwaysManagementData,
  cardiacArrestData,
  transportOptionsData,
  specialistPathwaysData,
  majorTraumaData,
  manchesterTriageSystemData,
  pathfindersData,
  jointDecisionMakingData,
  skeletalTraumaData,
  burnsData,
  communicationsConsentNotificationsData,
  patientRefusalData,
  mentalCapacityData,
  patientDecisionsData,
  patientCapacityData,
  bestInterestData,
  signAndSyncData,
  loading,
}) {
  //#region cadDetailsRender = CAD Details report #TODO - Needs testing
  const cadDetailsRender = cadDetailsData.map(
    ({
      id,
      Master_ePR_ID,
      CAD_ID,
      ePR_User,
      CAD_Date,
      CAD_Complaint,
      CAD_LocAdd1,
      CAD_LocAdd2,
      CAD_LocCity,
      CAD_LocPCode,
      CAD_IncidentDate,
      CAD_Enroute,
      CAD_ArriveScene,
      CAD_ArrivePatient,
      CAD_DepartScene,
      CAD_ArriveDest,
    }) => (
      <PatientReportRender key={id}>
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Incident Number"
              data={Master_ePR_ID ? Master_ePR_ID : "Not recorded"}
            />
            <ReportField
              field="Call Sign"
              data={ePR_User ? ePR_User : "Not recorded"}
            />
            <ReportField
              field="Call Date"
              data={CAD_Date ? CAD_Date : "Not recorded"}
            />
            <ReportField
              field="Dispatch Complaint"
              data={CAD_Complaint ? CAD_Complaint : "Not recorded"}
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField field="Crew" data={CAD_ID ? CAD_ID : "Not recorded"} />
            <ReportField
              field="Location of Incident"
              data={
                CAD_LocAdd1 || CAD_LocAdd2 || CAD_LocCity || CAD_LocPCode ? (
                  <PatientReportAddressContainer>
                    {CAD_LocAdd1}
                    <br />
                    {CAD_LocAdd2}
                    <br />
                    {CAD_LocCity}
                    <br />
                    {CAD_LocPCode}
                  </PatientReportAddressContainer>
                ) : (
                  "Not recorded"
                )
              }
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Received"
              data={CAD_IncidentDate ? CAD_IncidentDate : "Not recorded"}
            />
            <ReportField
              field="Mobile"
              data={CAD_Enroute ? CAD_Enroute : "Not recorded"}
            />
            <ReportField
              field="On Scene"
              data={CAD_ArriveScene ? CAD_ArriveScene : "Not recorded"}
            />
            <ReportField
              field="At Patient"
              data={CAD_ArrivePatient ? CAD_ArrivePatient : "Not recorded"}
            />
            <ReportField
              field="Left Scene"
              data={CAD_DepartScene ? CAD_DepartScene : "Not recorded"}
            />
            <ReportField
              field="Arrived Destination"
              data={CAD_ArriveDest ? CAD_ArriveDest : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /cadDetailsRender = CAD Details report

  //#region nokRender = Next of Kin report #TODO - Needs testing
  const nokRender = nokData.map(
    ({
      id,
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
      <React.Fragment key={id}>
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
            field="GP Address"
            data={
              GPAddressLine1 ||
              GPAddressLine2 ||
              GPAddressLine3 ||
              GPAddressLine4 ||
              GPPostcode ? (
                <>
                  {GPAddressLine1}
                  <br />
                  {GPAddressLine2}
                  <br />
                  {GPAddressLine3}
                  <br />
                  {GPAddressLine4}
                  <br />
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

  //#region patientDetailsRender = Patient Details report #TODO - Needs testing
  const patientDetailsRender = patientDetailsData.map(
    ({
      id,
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
      <PatientReportRender key={id}>
        <HeadingTwo text="Patient Details" />

        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Forename"
              data={PD_Firstname ? PD_Firstname : "Not recorded"}
            />
            <ReportField
              field="Surname"
              data={PD_Surname ? PD_Surname : "Not recorded"}
            />
            <ReportField
              field="Date of Birth"
              data={PD_DOB ? PD_DOB : "Not recorded"}
            />
            <ReportField
              field="Age (Years)"
              data={PD_Age_Yrs ? PD_Age_Yrs : "Not recorded"}
            />
            <ReportField
              field="Age (Months)"
              data={PD_Age_Mths ? PD_Age_Mths : "Not recorded"}
            />
            <ReportField
              field="Gender"
              data={PD_Gender ? PD_Gender : "Not recorded"}
            />
            <ReportField
              field="NHS No."
              data={PD_NHS_No ? PD_NHS_No : "Not recorded"}
            />
            <ReportField
              field="Ethnicity"
              data={PD_Ethnicity ? PD_Ethnicity : "Not recorded"}
            />
            <ReportField
              field="Weight (kg)"
              data={PD_Weight ? PD_Weight : "Not recorded"}
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Telephone"
              data={PD_Telephone ? PD_Telephone : "Not recorded"}
            />
            <ReportField
              field="Address"
              data={
                PD_Housenum || PD_Add1 || PD_Add2 || PD_Add3 || PD_Postcode ? (
                  <>
                    {PD_Housenum}
                    <br />
                    {PD_Add1}
                    <br />
                    {PD_Add2}
                    <br />
                    {PD_Add3}
                    <br />
                    {PD_Postcode}
                  </>
                ) : (
                  "Not recorded"
                )
              }
            />
            <ReportField
              field="Patient has allergies?"
              data={PD_Patient_Allergy ? PD_Patient_Allergy : "Not recorded"}
            />
            <ReportField
              field="Allergies"
              data={PD_Allergy ? PD_Allergy : "Not recorded"}
            />
            <ReportField
              field="Patient takes medications?"
              data={PD_Patient_Meds ? PD_Patient_Meds : "Not recorded"}
            />
            <ReportField
              field="Medications"
              data={PD_Medication ? PD_Medication : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>{nokRender}</PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /patientDetailsRender = Patient Details report

  //#region clinicalObservationsRender = Clinical Observations report #TODO - Needs testing
  const clinicalObservationsRender = clinicalObservationsData.map(
    ({
      id,
      Obs_Time,
      Obs_Resp_Rate,
      Obs_SpO2,
      Obs_Oxygen,
      Obs_Temp,
      Obs_BP_Sys,
      Obs_BP_Dia,
      Obs_Heart_Rate,
      Obs_AVPU,
      Obs_NEWS_Total,
      Obs_Cap_Refill,
      Obs_EVM_Eye,
      Obs_EVM_Voice,
      Obs_EVM_Motor,
      Obs_EVM_Total,
      Obs_BM,
      Obs_Pupils_Size_Left,
      Obs_Pupils_Size_Right,
      Obs_Pupils_React_Left,
      Obs_Pupils_React_Right,
      Obs_Pain_Score,
      Obs_Peak_Flow,
    }) => (
      <PatientReportRender key={id} style={{ borderTop: "1px solid #e0e0e0" }}>
        <PatientReportTableGrid>
          <PatientReportColumn>
            <ReportField
              field="Time"
              data={Obs_Time ? Obs_Time : null}
              fieldMarginBottom="4px"
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
              fieldWidth="100%"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Resp Rate"
              data={Obs_Resp_Rate ? Obs_Resp_Rate : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="SpO2 (&#37;)"
              data={Obs_SpO2 ? Obs_SpO2 : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Air/Oxygen"
              data={Obs_Oxygen ? Obs_Oxygen : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Temp (&#176;C)"
              data={Obs_Temp ? Obs_Temp : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="BP (MMHG)"
              data={
                Obs_BP_Sys || Obs_BP_Dia ? (
                  <>
                    {Obs_BP_Sys} / {Obs_BP_Dia}
                  </>
                ) : null
              }
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Heart Rate"
              data={Obs_Heart_Rate ? Obs_Heart_Rate : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="ACVPU"
              data={Obs_AVPU ? Obs_AVPU : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="NEWS2 Total"
              data={Obs_NEWS_Total ? Obs_NEWS_Total : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Cap Refill (sec)"
              data={Obs_Cap_Refill ? Obs_Cap_Refill : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="GCS"
              data={
                Obs_EVM_Eye || Obs_EVM_Voice || Obs_EVM_Motor ? (
                  <>
                    {Obs_EVM_Eye} / {Obs_EVM_Voice} / {Obs_EVM_Motor}
                  </>
                ) : null
              }
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="GCS Total"
              data={Obs_EVM_Total ? Obs_EVM_Total : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="BM (M/Mol)"
              data={Obs_BM ? Obs_BM : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Pupils Size (mm)"
              data={
                Obs_Pupils_Size_Left || Obs_Pupils_Size_Right ? (
                  <>
                    {Obs_Pupils_Size_Left} / {Obs_Pupils_Size_Right}
                  </>
                ) : null
              }
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Pupils React"
              data={
                Obs_Pupils_React_Left || Obs_Pupils_React_Right ? (
                  <>
                    {Obs_Pupils_React_Left} / {Obs_Pupils_React_Right}
                  </>
                ) : null
              }
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Pain Score"
              data={Obs_Pain_Score ? Obs_Pain_Score : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Peak Flow (l/min)"
              data={Obs_Peak_Flow ? Obs_Peak_Flow : null}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>
        </PatientReportTableGrid>
      </PatientReportRender>
    )
  );
  //#endregion /clinicalObservationsRender = Clinical Observations report

  //#region ivAccessRender = IV Access report #TODO - Needs testing
  const ivAccessRender = patientIVData.map(
    ({
      id,
      IV_ID,
      IV_Size,
      IV_Site,
      IV_Successful,
      IV_Flushed,
      IV_Non_Touch,
      IV_Attempts,
      IV_By,
    }) => (
      <PatientReportRender key={id} style={{ borderTop: "1px solid #e0e0e0" }}>
        <PatientReportTableGrid>
          <PatientReportColumn>
            <ReportField
              field="Type"
              data={IV_ID ? IV_ID : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Size"
              data={IV_Size ? IV_Size : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Site"
              data={IV_Site ? IV_Site : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Successful"
              data={IV_Successful ? IV_Successful : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Flushed"
              data={IV_Flushed ? IV_Flushed : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Non-touch Technique"
              data={IV_Non_Touch ? IV_Non_Touch : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Attempts"
              data={IV_Attempts ? IV_Attempts : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="By"
              data={IV_By ? IV_By : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>
        </PatientReportTableGrid>
      </PatientReportRender>
    )
  );
  //#endregion /ivAccessRender = IV Access report

  //#region ivRefusalRender = IV Refusal report #TODO - Needs testing
  const ivRefusalRender = patientIVData.map(
    ({ IV_ID, id, IV_Type_Refusal, IV_By_Refusal }) =>
      IV_ID === "" ? (
        <PatientReportRender
          key={id}
          style={{ borderTop: "1px solid #e0e0e0" }}
        >
          <PatientReportTableGrid>
            <PatientReportColumn>
              <ReportField
                field="Type"
                data={IV_Type_Refusal ? IV_Type_Refusal : "Not recorded"}
                paddingBottom="0"
                fontSize="0.71rem"
                fieldFontWeight="700"
                fieldMinHeight="45px"
                fieldTextTransform="uppercase"
              />
            </PatientReportColumn>

            <PatientReportColumn>
              <ReportField
                field="By"
                data={IV_By_Refusal ? IV_By_Refusal : "Not recorded"}
                paddingBottom="0"
                fontSize="0.71rem"
                fieldFontWeight="700"
                fieldMinHeight="45px"
                fieldTextTransform="uppercase"
              />
            </PatientReportColumn>

            <PatientReportColumn>
              <></>
            </PatientReportColumn>
          </PatientReportTableGrid>
        </PatientReportRender>
      ) : null
  );
  //#endregion /ivRefusalRender = IV Refusal report

  //#region drugsMedsRender = Drugs/Meds report #TODO - Needs testing
  const drugsMedsRender = drugsMedsData.map(
    ({
      id,
      Name,
      Pouch,
      Time,
      Dosage,
      Unit,
      Route,
      By,
      Own_Meds,
      Admin_PGD,
    }) => (
      <PatientReportRender key={id} style={{ borderTop: "1px solid #e0e0e0" }}>
        <PatientReportTableGrid>
          <PatientReportColumn>
            <ReportField
              field="Drug"
              data={Name ? Name : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Pouch No."
              data={Pouch ? Pouch : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Time"
              data={Time ? Time : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Dosage"
              data={Dosage ? Dosage : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Unit"
              data={Unit ? Unit : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Route"
              data={Route ? Route : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="By"
              data={By ? By : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Own Medication"
              data={Own_Meds ? Own_Meds : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Admin PGD"
              data={Admin_PGD ? Admin_PGD : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>
        </PatientReportTableGrid>
      </PatientReportRender>
    )
  );
  //#endregion /drugsMedsRender = Drugs/Meds report

  //#region drugsMedsRefusalRender = Drugs/Meds Refusal report #TODO - Missing 'Drug', needs testing
  const drugsMedsRefusalRender = drugsMedsData.map(
    ({ Time, id, Drug_Refusal, Name, Drug_By_Refusal }) =>
      Time === "" ? (
        <PatientReportRender
          key={id}
          style={{ borderTop: "1px solid #e0e0e0" }}
        >
          <PatientReportTableGrid>
            <PatientReportColumn>
              <ReportField
                field="Type"
                data={Drug_Refusal ? Drug_Refusal : "Not recorded"}
                paddingBottom="0"
                fontSize="0.71rem"
                fieldFontWeight="700"
                fieldMinHeight="45px"
                fieldTextTransform="uppercase"
              />
            </PatientReportColumn>

            <PatientReportColumn>
              <ReportField
                field="Drug"
                data={Name ? Name : "Not recorded"}
                paddingBottom="0"
                fontSize="0.71rem"
                fieldFontWeight="700"
                fieldMinHeight="45px"
                fieldTextTransform="uppercase"
              />
            </PatientReportColumn>

            <PatientReportColumn>
              <ReportField
                field="By"
                data={Drug_By_Refusal ? Drug_By_Refusal : "Not recorded"}
                paddingBottom="0"
                fontSize="0.71rem"
                fieldFontWeight="700"
                fieldMinHeight="45px"
                fieldTextTransform="uppercase"
              />
            </PatientReportColumn>

            <PatientReportColumn>
              <></>
            </PatientReportColumn>
          </PatientReportTableGrid>
        </PatientReportRender>
      ) : null
  );
  //#endregion /drugsMedsRefusalRender = Drugs/Meds Refusal report

  //#region cardiacAssessmentRender = Cardiac Assessment report #TODO - Needs testing
  const cardiacAssessmentRender = cardiacChestPainData.map(
    ({
      id,
      Time_Onset,
      Time_Obtained,
      Four_Rhythm,
      Twelve_Rhythm,
      ECG_Other,
      STEMI,
      PADS_applied,
      Referred_To_PCI,
      TCP,
    }) => (
      <PatientReportRender key={id} style={{ borderTop: "1px solid #e0e0e0" }}>
        <PatientReportTableGrid>
          <PatientReportColumn>
            <ReportField
              field="Time Onset"
              data={Time_Onset ? Time_Onset : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Time Obtained"
              data={Time_Obtained ? Time_Obtained : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="4 Rhythm"
              data={Four_Rhythm ? Four_Rhythm : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="12 Rhythm"
              data={Twelve_Rhythm ? Twelve_Rhythm : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Other Rhythm"
              data={ECG_Other ? ECG_Other : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="STEMI"
              data={STEMI ? STEMI : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="PADS applied"
              data={PADS_applied ? PADS_applied : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Referred to Primary PCI"
              data={Referred_To_PCI ? Referred_To_PCI : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="TCP"
              data={TCP ? TCP : "Not recorded"}
              paddingBottom="2px"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>
        </PatientReportTableGrid>
      </PatientReportRender>
    )
  );
  //#endregion /cardiacAssessmentRender = Cardiac Assessment report

  //#region strokeAssesssmentRender = Stroke Assessment report #TODO - Needs testing
  const strokeAssesssmentRender = strokeAssessmentData.map(
    ({
      id,
      SI_Suspected,
      SI_TIA,
      BM_Recorded,
      Referred_Acute,
      FAST_Positive,
      SI_Face,
      Face_Box,
      SI_Arms,
      Arms_Box,
      SI_Speech,
      Onset_Time,
      Last_Time,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Stroke Assessment" margin="2rem 0 1rem 0" />

        <PatientReportGrid>
          <PatientReportColumn>
            <HeadingThree text="Condition" />
            <ReportField
              field="Suspected Stroke"
              data={SI_Suspected ? SI_Suspected : "Not recorded"}
            />
            <ReportField
              field="Suspected TIA"
              data={SI_TIA ? SI_TIA : "Not recorded"}
            />
            <ReportField
              field="BM Recorded"
              data={BM_Recorded ? BM_Recorded : "Not recorded"}
            />
            <ReportField
              field="Referred to Hyper-Accute"
              data={Referred_Acute ? Referred_Acute : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="FAST Assessment" />
            <ReportField
              field="FAST Assessment Outcome"
              data={FAST_Positive ? FAST_Positive : "Not recorded"}
            />

            <PatientReportGrid>
              <PatientReportColumn>
                <ReportField
                  field="Face"
                  data={SI_Face ? SI_Face : "Not recorded"}
                />
              </PatientReportColumn>

              <PatientReportColumn>
                <ReportField
                  field="Side (Face)"
                  data={Face_Box ? Face_Box : "Not recorded"}
                />
              </PatientReportColumn>
            </PatientReportGrid>

            <PatientReportGrid>
              <PatientReportColumn>
                <ReportField
                  field="Arms"
                  data={SI_Arms ? SI_Arms : "Not recorded"}
                />
              </PatientReportColumn>

              <PatientReportColumn>
                <ReportField
                  field="Side (Arms)"
                  data={Arms_Box ? Arms_Box : "Not recorded"}
                />
              </PatientReportColumn>
            </PatientReportGrid>

            <ReportField
              field="Speech"
              data={SI_Speech ? SI_Speech : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Witnessed Onset"
              data={Onset_Time ? Onset_Time : "Not recorded"}
            />
            <ReportField
              field="Last time seen well"
              data={Last_Time ? Last_Time : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /strokeAssesssmentRender = Stroke Assessment repor

  //#region airwaysManagementRender = Airways Management report #TODO - Needs testing
  const airwaysManagementRender = airwaysManagementData.map(
    ({
      id,
      BVM,
      NPA_Size,
      NPA_By,
      OPA_Size,
      OPA_By,
      LMA_Size,
      LMA_By,
      ET_Size,
      ET_By,
      GradeOfView,
      SurgicalCric,
      SurgicalCric_By,
      Suction,
      Suction_By,
      Thoracostomy,
      Thoracostomy_By,
    }) => (
      <PatientReportRender key={id}>
        <PatientReportGrid>
          <PatientReportColumn>
            <HeadingThree text="Bag Valve Mask" />
            <ReportField
              field="Size"
              data={BVM ? BVM : "Not recorded"}
              marginBottom="1rem"
            />

            <HeadingThree text="Nasopharyngeal Airway" />
            <ReportField
              field="Size"
              data={NPA_Size ? NPA_Size : "Not recorded"}
            />
            <ReportField
              field="By"
              data={NPA_By ? NPA_By : "Not recorded"}
              marginBottom="1rem"
            />

            <HeadingThree text="Oropharyngeal Airway" />
            <ReportField
              field="Size"
              data={OPA_Size ? OPA_Size : "Not recorded"}
            />
            <ReportField field="By" data={OPA_By ? OPA_By : "Not recorded"} />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Supraglottic Airway" />
            <ReportField
              field="Size"
              data={LMA_Size ? LMA_Size : "Not recorded"}
            />
            <ReportField
              field="By"
              data={LMA_By ? LMA_By : "Not recorded"}
              marginBottom="1rem"
            />

            <HeadingThree text="Endotracheal" />
            <ReportField
              field="Size"
              data={ET_Size ? ET_Size : "Not recorded"}
            />
            <ReportField field="By" data={ET_By ? ET_By : "Not recorded"} />
            <ReportField
              field="Grade of View"
              data={GradeOfView ? GradeOfView : "Not recorded"}
              marginBottom="1rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Surgical Cric." />
            <ReportField
              data={
                SurgicalCric
                  ? SurgicalCric === "True"
                    ? "Yes"
                    : "No"
                  : "Not recorded"
              }
            />
            <ReportField
              field="By"
              data={SurgicalCric_By ? SurgicalCric_By : "Not recorded"}
              marginBottom="1rem"
            />

            <HeadingThree text="Suction" />
            <ReportField
              data={
                Suction ? (Suction === "True" ? "Yes" : "No") : "Not recorded"
              }
            />
            <ReportField
              field="By"
              data={Suction_By ? Suction_By : "Not recorded"}
              marginBottom="1rem"
            />

            <HeadingThree text="Thoracostomy" />
            <ReportField
              data={
                Thoracostomy
                  ? Thoracostomy === "True"
                    ? "Yes"
                    : "No"
                  : "Not recorded"
              }
            />
            <ReportField
              field="By"
              data={Thoracostomy_By ? Thoracostomy_By : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /airwaysManagementRender = Airways Management report

  //#region cardiacArrestRender = Cardiac Arrest report #TODO - Needs testing
  const cardiacArrestRender = cardiacArrestData.map(
    ({
      id,
      Resus_Attempted,
      Bystander_CPR,
      Time_Compression_Started,
      Public_AED,
      Time_of_First_Shock,
      First_Monitored_Rhythm,
      NWAS_Shocked,
      Time_of_First_NWAS_Shock,
      ROSC_Present_at_Handover,
      Time_of_ROSC,
      Time_of_sub_ROSC,
      Termination_of_Resus,
      No_of_Shocks,
    }) => (
      <PatientReportRender key={id}>
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Resus Attempted"
              data={Resus_Attempted ? Resus_Attempted : "Not recorded"}
            />
            <ReportField
              field="Bystander CPR"
              data={Bystander_CPR ? Bystander_CPR : "Not recorded"}
            />
            <ReportField
              field="Time Compressions Started"
              data={
                Time_Compression_Started
                  ? Time_Compression_Started
                  : "Not recorded"
              }
            />
            <ReportField
              field="Public AED"
              data={Public_AED ? Public_AED : "Not recorded"}
            />
            <ReportField
              field="Time of First Public AED Shock"
              data={Time_of_First_Shock ? Time_of_First_Shock : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="First Monitored Rhythm"
              data={
                First_Monitored_Rhythm ? First_Monitored_Rhythm : "Not recorded"
              }
            />
            <ReportField
              field="NWAS Shocks"
              data={NWAS_Shocked ? NWAS_Shocked : "Not recorded"}
            />
            <ReportField
              field="Time of First NWAS Shock"
              data={
                Time_of_First_NWAS_Shock
                  ? Time_of_First_NWAS_Shock
                  : "Not recorded"
              }
            />
            <ReportField
              field="ROSC Present at Handover"
              data={
                ROSC_Present_at_Handover
                  ? ROSC_Present_at_Handover
                  : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Time of First ROSC"
              data={Time_of_ROSC ? Time_of_ROSC : "Not recorded"}
            />
            <ReportField
              field="Time of Subsequent ROSCs"
              data={Time_of_sub_ROSC ? Time_of_sub_ROSC : "Not recorded"}
            />
            <ReportField
              field="Termination of Resus"
              data={
                Termination_of_Resus ? Termination_of_Resus : "Not recorded"
              }
            />
            <ReportField
              field="Total No. of Shocks"
              data={No_of_Shocks ? No_of_Shocks : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /cardiacArrestRender = Cardiac Arrest report

  //#region transportOptionsRender = Transport Options report #TODO - Needs testing
  const transportOptionsRender = transportOptionsData.map(
    ({
      id,
      DestinationName,
      WardName,
      OtherLocation,
      patientOwnMeds,
      Pre_Alert,
      PreAlert_RAG,
      NonTransportReason,
      Other,
      Scene_Mobility,
      Amb_Mobility,
    }) => (
      <PatientReportRender key={id}>
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Receiving Location"
              data={DestinationName ? DestinationName : "Not recorded"}
            />
            <ReportField
              field="Destination Name"
              data={WardName ? WardName : "Not recorded"}
            />
            <ReportField
              field="Other Location"
              data={OtherLocation ? OtherLocation : "Not recorded"}
            />
            <ReportField
              field="Patient Own Meds Transported"
              data={
                patientOwnMeds
                  ? patientOwnMeds === "True"
                    ? "Yes"
                    : "No"
                  : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Hospital Pre-Alert" />
            <ReportField
              field="Pre-Alert"
              data={Pre_Alert ? Pre_Alert : "Not recorded"}
            />
            <ReportField
              field="Status"
              data={PreAlert_RAG ? PreAlert_RAG : "Not recorded"}
              marginBottom="2rem"
            />

            <HeadingThree text="Non-Transport" />
            <ReportField
              field="Reason"
              data={NonTransportReason ? NonTransportReason : "Not recorded"}
            />
            <ReportField
              field="Other"
              data={Other ? Other : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Patients Mobility" />
            <ReportField
              field="Scene to Ambulance"
              data={Scene_Mobility ? Scene_Mobility : "Not recorded"}
            />
            <ReportField
              field="Ambulance to Hospital"
              data={Amb_Mobility ? Amb_Mobility : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /transportOptionsRender = Transport Options report

  //#region specialistPathwayRender = Specialist Pathway report #TODO - Needs testing
  const specialistPathwayRender = specialistPathwaysData.map(
    ({
      id,
      Pathway_Refusal,
      Pathway_NotApplicable,
      SP_Specialist_Path,
      Safeguarding_Concern,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Specialist Pathways Assessment" />

        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Pathway Used"
              data={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <ReportField
              field="Patient refused pathway"
              data={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Specialist Pathway"
              data={SP_Specialist_Path ? SP_Specialist_Path : "Not recorded"}
            />
            <ReportField
              field="Are there any indications that lead to a safeguarding concern?"
              data={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <></>
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /specialistPathwayRender = Specialist Pathway report

  //#region majorTraumaRender = Major Trauma report #TODO - Needs testing
  const majorTraumaRender = majorTraumaData.map(
    ({
      id,
      Pathway_Refusal,
      Pathway_NotApplicable,
      MajorTrauma_Pathfinder,
      MJ_Discriminator,
      MJOutcome,
      Safeguarding_Concern,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Major Trauma" />

        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Pathway Used"
              data={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <ReportField
              field="Patient refused pathway"
              data={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Major Trauma Pathfinder"
              data={
                MajorTrauma_Pathfinder ? MajorTrauma_Pathfinder : "Not recorded"
              }
            />
            <ReportField
              field="Discriminator"
              data={MJ_Discriminator ? MJ_Discriminator : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Outcome"
              data={MJOutcome ? MJOutcome : "Not recorded"}
            />
            <ReportField
              field="Are there any indications that lead to a safeguarding concern?"
              data={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /majorTraumaRender = Major Trauma report

  //#region manchesterTriageSystemRender = Manchester Triage System report #TODO - Needs testing
  const manchesterTriageSystemRender = manchesterTriageSystemData.map(
    ({
      id,
      Pathway_Refusal,
      Pathway_NotAvailable,
      Pathway_NotApplicable,
      MTS_Card,
      MTS_Discriminator,
      Outcome_RAB,
      Outcome_Code,
      Safeguarding_Concern,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Manchester Triage System" />

        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Pathway Used"
              data={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <ReportField
              field="Not Qualified To"
              data={
                Pathway_NotAvailable ? Pathway_NotAvailable : "Not recorded"
              }
            />
            <ReportField
              field="Patient refused pathway"
              data={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="MTS Card"
              data={MTS_Card ? MTS_Card : "Not recorded"}
            />
            <ReportField
              field="MTS Discriminator"
              data={MTS_Discriminator ? MTS_Discriminator : "Not recorded"}
            />
            <ReportField
              field="Outcome Colour"
              data={Outcome_RAB ? Outcome_RAB : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Outcome Code"
              data={Outcome_Code ? Outcome_Code : "Not recorded"}
            />
            <ReportField
              field="Are there any indications that lead to a safeguarding concern?"
              data={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /manchesterTriageSystemRender = Manchester Triage System report

  //#region pathfindersRender = Pathfinders report #TODO - Needs testing
  const pathfindersRender = pathfindersData.map(
    ({
      id,
      Pathway_Refusal,
      Pathway_NotApplicable,
      Pathway_Exclude,
      Pathfinder_Medical,
      Medical_Discriminator,
      Pathfinder_Trauma,
      Trauma_Discriminator,
      Pathfinder_Outcome,
      Safeguarding_Concern,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Pathfinders" />

        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Pathway Used"
              data={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <ReportField
              field="Patient refused pathway"
              data={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Pathfinder Excluded" />
            <ReportField
              field="Exclusion Reason"
              data={Pathway_Exclude ? Pathway_Exclude : "Not recorded"}
            />
            <ReportField
              field="Medical Pathfinder"
              data={Pathfinder_Medical ? Pathfinder_Medical : "Not recorded"}
            />
            <ReportField
              field="Pathfinder Discriminator"
              data={
                Medical_Discriminator ? Medical_Discriminator : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Trauma Pathfinder"
              data={Pathfinder_Trauma ? Pathfinder_Trauma : "Not recorded"}
            />
            <ReportField
              field="Pathfinder Discriminator"
              data={
                Trauma_Discriminator ? Trauma_Discriminator : "Not recorded"
              }
            />
            <ReportField
              field="Pathfinder Outcome"
              data={Pathfinder_Outcome ? Pathfinder_Outcome : "Not recorded"}
            />
            <ReportField
              field="Are there any indications that lead to a safeguarding concern?"
              data={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /pathfindersRender = Pathfinders report

  //#region jointDecisionMakingRender = Joint Decision Making report #TODO - Needs testing
  const jointDecisionMakingRender = jointDecisionMakingData.map(
    ({
      id,
      ActionTaken,
      TraumaCellAdvice,
      ClinicalSupportAdvice,
      OtherSupportAdvice,
      AdviceForm,
      ClinicalSupportNotes,
      OtherAdvice,
    }) => (
      <PatientReportRender key={id} style={{ borderTop: "1px solid #e0e0e0" }}>
        <ReportField
          field="Action Taken"
          data={ActionTaken ? ActionTaken : "Not recorded"}
          marginBottom="1rem"
        />
        <PatientReportTableGrid>
          <PatientReportColumn>
            <ReportField
              field="Trauma Cell"
              data={TraumaCellAdvice ? TraumaCellAdvice : "Not recorded"}
              marginBottom="1rem"
              fieldMinHeight="35px"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Clinical Hub"
              data={
                ClinicalSupportAdvice ? ClinicalSupportAdvice : "Not recorded"
              }
              marginBottom="1rem"
              fieldMinHeight="35px"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Other"
              data={OtherSupportAdvice ? OtherSupportAdvice : "Not recorded"}
              marginBottom="1rem"
              fieldMinHeight="35px"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Advice Given By"
              data={AdviceForm ? AdviceForm : "Not recorded"}
              marginBottom="1rem"
              fieldMinHeight="35px"
            />
          </PatientReportColumn>
        </PatientReportTableGrid>
        <ReportField
          field="Note"
          data={ClinicalSupportNotes ? ClinicalSupportNotes : "Not recorded"}
          marginBottom="1rem"
        />
        <ReportField
          field="Other (Please State)"
          data={OtherAdvice ? OtherAdvice : "Not recorded"}
          paddingBottom="0"
        />
      </PatientReportRender>
    )
  );
  //#endregion /jointDecisionMakingRender = Joint Decision Making report

  //#region skeletalTraumaRender = Skeletal Trauma report #TODO - Needs testing
  const skeletalTraumaRender = skeletalTraumaData.map(
    ({ id, ST_Type, ST_Site, ST_Side, ST_Area, ST_Time, ST_By }) => (
      <PatientReportRender key={id} style={{ borderTop: "1px solid #e0e0e0" }}>
        <PatientReportTableGrid>
          <PatientReportColumn>
            <ReportField
              field="Type"
              data={ST_Type ? ST_Type : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Site"
              data={ST_Site ? ST_Site : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Side"
              data={ST_Side ? ST_Side : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Area"
              data={ST_Area ? ST_Area : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Time"
              data={ST_Time ? ST_Time : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="By"
              data={ST_By ? ST_By : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldMinHeight="45px"
              fieldTextTransform="uppercase"
            />
          </PatientReportColumn>
        </PatientReportTableGrid>
      </PatientReportRender>
    )
  );
  //#endregion /skeletalTraumaRender = Skeletal Trauma report

  //#region burnsRender = Burns report #TODO - Needs testing
  const burnsRender = burnsData.map(
    ({
      id,
      TotalBox,
      t_Head,
      HeadBox,
      Head_Dressing_Time,
      Head_Cooling_Time,
      t_Torso,
      TorsoBox,
      Torso_Dressing_Time,
      Torso_Cooling_Time,
      t_Limbs,
      LimbsBox,
      Limbs_Dressing_Time,
      Limbs_Cooling_Time,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Burns" />
        <ReportField
          field="Total &#37;"
          data={TotalBox ? TotalBox : "Not recorded"}
          marginBottom="1rem"
        />

        <PatientReportGrid>
          <PatientReportColumn>
            <HeadingThree text="Head" />
            <ReportField
              field="Thickness"
              data={t_Head ? t_Head : "Not recorded"}
            />
            <ReportField
              field="&#37; Area"
              data={HeadBox ? HeadBox : "Not recorded"}
            />
            <ReportField
              field="Time Dressing Applied"
              data={Head_Dressing_Time ? Head_Dressing_Time : "Not recorded"}
            />
            <ReportField
              field="Time Cooling Applied"
              data={Head_Cooling_Time ? Head_Cooling_Time : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Torso" />
            <ReportField
              field="Thickness"
              data={t_Torso ? t_Torso : "Not recorded"}
            />
            <ReportField
              field="&#37; Area"
              data={TorsoBox ? TorsoBox : "Not recorded"}
            />
            <ReportField
              field="Time Dressing Applied"
              data={Torso_Dressing_Time ? Torso_Dressing_Time : "Not recorded"}
            />
            <ReportField
              field="Time Cooling Applied"
              data={Torso_Cooling_Time ? Torso_Cooling_Time : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Limbs" />
            <ReportField
              field="Thickness"
              data={t_Limbs ? t_Limbs : "Not recorded"}
            />
            <ReportField
              field="&#37; Area"
              data={LimbsBox ? LimbsBox : "Not recorded"}
            />
            <ReportField
              field="Time Dressing Applied"
              data={Limbs_Dressing_Time ? Limbs_Dressing_Time : "Not recorded"}
            />
            <ReportField
              field="Time Cooling Applied"
              data={Limbs_Cooling_Time ? Limbs_Cooling_Time : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /burnsRender = Burns report

  //#region patientRefusalRender = Patient Refusal report #TODO - Needs testing
  const patientRefusalRender = patientRefusalData.map(
    ({
      id,
      As_Reason,
      As_Other,
      Tran_Reason,
      Tran_Other,
      Int_Reason,
      Int_Other,
    }) => (
      <React.Fragment key={id}>
        <PatientReportColumn>
          <ReportField field="The below section can also be populated using the Patient refusal slide out available in the Notes" />

          <HeadingThree text="Refused Assessment" />
          <ReportField
            field="Reason"
            data={As_Reason ? As_Reason : "Not recorded"}
          />
          <ReportField
            field="Other"
            data={As_Other ? As_Other : "Not recorded"}
            marginBottom="2rem"
          />

          <HeadingThree text="Refused Transport" />
          <ReportField
            field="Reason"
            data={Tran_Reason ? Tran_Reason : "Not recorded"}
          />
          <ReportField
            field="Other"
            data={Tran_Other ? Tran_Other : "Not recorded"}
            marginBottom="2rem"
          />

          <HeadingThree text="Refused Intervention/Treatment" />
          <ReportField
            field="Reason"
            data={Int_Reason ? Int_Reason : "Not recorded"}
          />
          <ReportField
            field="Other"
            data={Int_Other ? Int_Other : "Not recorded"}
            marginBottom="2rem"
          />
        </PatientReportColumn>
      </React.Fragment>
    )
  );
  //#endregion /patientRefusalRender = Patient Refusal report

  //#region communicationsConsentNotificationsRender = Communications, Consent and Notifications report #TODO - Needs testing
  const communicationsConsentNotificationsRender = communicationsConsentNotificationsData.map(
    ({
      id,
      CommsNeeds_YN,
      ImprovePatCare_YN,
      NotifyVulnerableAdult,
      NotifyVulnerableChild,
      SUDC,
      DOD_Form,
      NoCapacityDemoed_YN,
      PatientHasCapacity_YN,
      ConsentGainedPRF_YN,
    }) => (
      <PatientReportRender key={id}>
        <PatientReportGrid>
          <PatientReportColumn>
            <HeadingThree text="Communication" />
            <ReportField
              field="Does the Patient have any communication or information needs (described in notes)?"
              data={CommsNeeds_YN ? CommsNeeds_YN : "Not recorded"}
            />
            <ReportField
              field="NWAS improves the quality of care given to Patients through clinical audit, research and Patient feedback.
              
              May we contact you after this incident to assist us in improving patient care?"
              data={ImprovePatCare_YN ? ImprovePatCare_YN : "Not recorded"}
              marginBottom="2rem"
            />

            <HeadingThree text="Notifications" />
            <ReportField
              field="Vulnerable Adult"
              data={
                NotifyVulnerableAdult ? NotifyVulnerableAdult : "Not recorded"
              }
            />
            <ReportField
              field="Vulnerable Child"
              data={
                NotifyVulnerableChild ? NotifyVulnerableChild : "Not recorded"
              }
            />
            <ReportField field="SUDC" data={SUDC ? SUDC : "Not recorded"} />
            <ReportField
              field="DOD Form"
              data={DOD_Form ? DOD_Form : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Consent" />
            <ReportField
              field="The Patient has demonstrated behaviour that indicates they may not have the capacity to make decisions for themself. YES - Complete Capacity to Consent."
              data={NoCapacityDemoed_YN ? NoCapacityDemoed_YN : "Not recorded"}
            />
            <ReportField
              field="Does the Patient have capacity?"
              data={
                PatientHasCapacity_YN ? PatientHasCapacity_YN : "Not recorded"
              }
            />
            <ReportField
              field="Consent gained for care detailed on this PRF?"
              data={ConsentGainedPRF_YN ? ConsentGainedPRF_YN : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>{patientRefusalRender}</PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /communicationsConsentNotificationsRender = Communications, Consent and Notifications report

  //#region mentalCapacityRender = Mental Capacity report #TODO - Needs testing
  const mentalCapacityRender = mentalCapacityData.map(
    ({ id, MCA_Age, MCA_Reason, MCA_Treat }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Mental Capacity Act" />
        <HeadingThree
          text="Does the Mental Capacity Act 2005 apply?"
          marginBottom="1rem"
        />
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Is the Patient over 16 years of age?"
              data={MCA_Age ? MCA_Age : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Is there reason to doubt the Patients capacity?"
              data={MCA_Reason ? MCA_Reason : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Is there a physical illness/injury that requires treatment?"
              data={MCA_Treat ? MCA_Treat : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /mentalCapacityRender = Mental Capacity report

  //#region patientDecisionsRender = Patient Decisions report #TODO - Needs testing
  const patientDecisionsRender = patientDecisionsData.map(
    ({
      id,
      p_DecisionBox,
      p_DescribeBox,
      DE_Understand,
      DE_Information,
      DE_Use,
      DE_Communicate,
    }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Patient Decisions" marginBottom="1rem" />
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Describe the decisions you're asking the Patient to make:"
              data={p_DecisionBox ? p_DecisionBox : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Describe how the Patient has a disturbance of the mind, including a potential lack of capacity:"
              data={p_DescribeBox ? p_DescribeBox : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Please identify why the Patient is unable to make a decision:" />
            <ReportField
              field="Unable to understand information"
              data={DE_Understand ? DE_Understand : "Not recorded"}
            />
            <ReportField
              field="Unable to retain information"
              data={DE_Information ? DE_Information : "Not recorded"}
            />
            <ReportField
              field="Unable to use information to form a decision"
              data={DE_Use ? DE_Use : "Not recorded"}
            />
            <ReportField
              field="Unable to communicate their decision"
              data={DE_Communicate ? DE_Communicate : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /patientDecisionsRender = Patient Decisions report

  //#region patientCapacityRender = Patient Capacity report #TODO - Needs testing
  const patientCapacityRender = patientCapacityData.map(
    ({ id, c_DescribeBox, c_PreviousBox, GC_Yes }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Patient Capacity" marginBottom="1rem" />
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Describe the actions you have taken to assist the Patient in making their own decisions and gain capacity:"
              data={c_DescribeBox ? c_DescribeBox : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Despite the actions taken previously, I believe that the Patient still lacks capacity because:"
              data={c_PreviousBox ? c_PreviousBox : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Is the desired treatment/assessment time critical and would delay cause immediate harm to the Patient:"
              data={GC_Yes ? GC_Yes : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /patientCapacityRender = Patient Capacity report

  //#region bestInterestRender = Best Interest report #TODO - Needs testing
  const bestInterestRender = bestInterestData.map(
    ({ id, a_Box, b_Box, c_Box, d_Box, OptionBox }) => (
      <PatientReportRender key={id}>
        <HeadingTwo text="Best Interest Option" />
        <HeadingThree
          text="Best interest decision options (consider all options of care, giving consideration to expressed wishes of Patients and family"
          marginBottom="1rem"
        />
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Option A"
              data={a_Box ? a_Box : "Not recorded"}
            />
            <ReportField
              field="Option B"
              data={b_Box ? b_Box : "Not recorded"}
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="Option C"
              data={c_Box ? c_Box : "Not recorded"}
            />
            <ReportField
              field="Option D"
              data={d_Box ? d_Box : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField
              field="I believe this option is the least restrictive and offers the Patient the appropriate care, which is proportionate to their condition and is in their best interests:"
              data={OptionBox ? OptionBox : "Not recorded"}
            />
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /bestInterestRender = Best Interest report

  //#region signAndSyncRender = Sign and Sync report #TODO - Needs testing
  const signAndSyncRender = signAndSyncData.map(
    ({
      id,
      Final_Impression,
      staffNumberInput,
      professsional_Box,
      signature,
      professionalRegNoInput,
      snrStaffNumberInput,
      snrProfessional_Box,
      snrProfessionalRegNoInput,
      signatureSnrSig,
      signatureRefusalName,
    }) => (
      <PatientReportRender key={id}>
        {/* Final Impression and Clinical Signatures */}
        <HeadingTwo
          text="Final Impression and Clinical Signatures"
          marginBottom="1rem"
        />
        <PatientReportGrid>
          <PatientReportColumn>
            <HeadingThree text="Final Impression" />
            <ReportField
              field="Final Impression"
              data={Final_Impression ? Final_Impression : "Not recorded"}
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Clinical Assessment Completed By" />
            <ReportField
              field="Staff Number"
              data={staffNumberInput ? staffNumberInput : "Not recorded"}
            />
            <ReportField
              field="Registration No."
              data={
                professsional_Box || professionalRegNoInput
                  ? { professsional_Box } / { professionalRegNoInput }
                  : "Not recorded"
              }
            />
            <ReportField field="Staff Signature" />
            {signature && signature.length > 0 ? (
              <img
                src={"data:image/png;base64," + signature}
                alt="Staff Signature"
              />
            ) : null}
          </PatientReportColumn>

          <PatientReportColumn>
            <HeadingThree text="Senior Clinician's Signature" />
            <ReportField
              field="Staff Number"
              data={snrStaffNumberInput ? snrStaffNumberInput : "Not recorded"}
            />
            <ReportField
              field="Registration No."
              data={
                professsional_Box || snrProfessionalRegNoInput
                  ? { snrProfessional_Box } / { snrProfessionalRegNoInput }
                  : "Not recorded"
              }
            />
            <ReportField field="Senior Clinician's Signature" />
            {signatureSnrSig && signatureSnrSig.length > 0 ? (
              <img
                src={"data:image/png;base64," + signatureSnrSig}
                alt="Senior Clinician Signature"
              />
            ) : null}
          </PatientReportColumn>
        </PatientReportGrid>

        {/* Patient Refusal */}
        <HeadingTwo text="Patient Refusal" marginBottom="1rem" />
        <HeadingThree text="Refusal Statement/Signature" />
        <ReportField
          field="All the information and treatment options relating to my conditions/injuries have been explained. I fully understand the risks of refusing treatment or transport as advised by the ambulance clinician and I accept all responsibility for my own care."
          marginBottom="2rem"
        />

        <HeadingThree text="Patients / Guardians Name" />
        <PatientReportGrid>
          <PatientReportColumn>
            <ReportField
              field="Name"
              data={
                signatureRefusalName ? signatureRefusalName : "Not recorded"
              }
              marginBottom="2rem"
            />
          </PatientReportColumn>

          <PatientReportColumn>
            <ReportField field="Signature" data="[Requires Signature render]" />
          </PatientReportColumn>

          <PatientReportColumn>
            <></>
          </PatientReportColumn>
        </PatientReportGrid>
      </PatientReportRender>
    )
  );
  //#endregion /signAndSyncRender = Sign and Sync report

  return (
    <PatientReportContainer>
      {/* Incident Information */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Incident Information"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : cadDetailsData && cadDetailsData.length > 0
            ? cadDetailsRender
            : "Incident Information data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* Patient Details */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Patient Details"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : patientDetailsData && patientDetailsData.length > 0
            ? patientDetailsRender
            : "Patient Details data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* Clinical Observations */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Clinical Observations"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : clinicalObservationsData && clinicalObservationsData.length > 0
            ? clinicalObservationsRender
            : "Clinical Observations data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* IV Access and Medications */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="IV Access and Medications"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null ? (
            "Please select a Patient from the Patient list"
          ) : loading ? (
            "Loading..."
          ) : patientIVData &&
            patientIVData.length > 0 &&
            drugsMedsData &&
            drugsMedsData.length > 0 ? (
            <>
              {patientIVData && patientIVData.length > 0 ? (
                <>
                  <HeadingTwo text="IV Access" />
                  {ivAccessRender}
                </>
              ) : null}

              {patientIVData && patientIVData.length > 0 ? (
                <>
                  <HeadingTwo text="IV Not Cannulated" marginTop="2rem" />
                  {ivRefusalRender}
                </>
              ) : null}

              {drugsMedsData && drugsMedsData.length > 0 ? (
                <>
                  <HeadingTwo text="Drugs / Meds" marginTop="2rem" />
                  {drugsMedsRender}
                </>
              ) : null}

              {drugsMedsData && drugsMedsData.length > 0 ? (
                <>
                  <HeadingTwo text="Drugs Refusal" marginTop="2rem" />
                  {drugsMedsRefusalRender}
                </>
              ) : null}
            </>
          ) : (
            "IV Access and Medications data not recorded"
          )}
        </ReportContainer>
      </PatientReportSection>

      {/* Cardiovascular Assessment */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Cardiovascular Assessment"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null ? (
            "Please select a Patient from the Patient list"
          ) : loading ? (
            "Loading..."
          ) : cardiacChestPainData &&
            cardiacChestPainData.length > 0 &&
            strokeAssessmentData &&
            strokeAssessmentData.length > 0 ? (
            <>
              {cardiacChestPainData && cardiacChestPainData.length > 0 ? (
                <>
                  <HeadingTwo text="Cardiac Assessment" />
                  {cardiacAssessmentRender}
                </>
              ) : null}

              {strokeAssessmentData && strokeAssessmentData.length > 0
                ? strokeAssesssmentRender
                : null}
            </>
          ) : (
            "Cardiovascular Assessment data not recorded"
          )}
        </ReportContainer>
      </PatientReportSection>

      {/* Airways Management */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Airways Management"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : airwaysManagementData && airwaysManagementData.length > 0
            ? airwaysManagementRender
            : "Airways Management data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* Cardiac Arrest */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Cardiac Arrest"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : cardiacArrestData && cardiacArrestData.length > 0
            ? cardiacArrestRender
            : "Cardiac Arrest data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* Transport Options */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Transport Options"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : transportOptionsData && transportOptionsData.length > 0
            ? transportOptionsRender
            : "Transport Options data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* Triage and Pathfinder Support */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Triage and Pathfinder Support"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null ? (
            "Please select a Patient from the Patient list"
          ) : loading ? (
            "Loading..."
          ) : specialistPathwaysData &&
            specialistPathwaysData.length > 0 &&
            majorTraumaData &&
            majorTraumaData.length > 0 &&
            manchesterTriageSystemData &&
            manchesterTriageSystemData.length > 0 &&
            pathfindersData &&
            pathfindersData.length > 0 &&
            jointDecisionMakingData &&
            jointDecisionMakingData.length > 0 ? (
            <>
              {specialistPathwaysData && specialistPathwaysData.length > 0
                ? specialistPathwayRender
                : null}

              {majorTraumaData && majorTraumaData.length > 0
                ? majorTraumaRender
                : null}

              {manchesterTriageSystemData &&
              manchesterTriageSystemData.length > 0
                ? manchesterTriageSystemRender
                : null}

              {pathfindersData && pathfindersData.length > 0
                ? pathfindersRender
                : null}

              {jointDecisionMakingData && jointDecisionMakingData.length > 0 ? (
                <>
                  <HeadingTwo text="Joint Decision Making" />
                  {jointDecisionMakingRender}
                </>
              ) : null}
            </>
          ) : (
            "Triage and Pathfinder Support data not recorded"
          )}
        </ReportContainer>
      </PatientReportSection>

      {/* Trauma Management */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Trauma Management"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null ? (
            "Please select a Patient from the Patient list"
          ) : loading ? (
            "Loading..."
          ) : skeletalTraumaData &&
            skeletalTraumaData.length > 0 &&
            burnsData &&
            burnsData.length > 0 ? (
            <>
              {skeletalTraumaData && skeletalTraumaData.length > 0 ? (
                <>
                  <HeadingTwo text="Skeletal Trauma" />
                  {skeletalTraumaRender}
                </>
              ) : null}

              {burnsData && burnsData.length > 0 ? burnsRender : null}
            </>
          ) : (
            "Trauma Management data not recorded"
          )}
        </ReportContainer>
      </PatientReportSection>

      {/* Communications, Consent and Notifications */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Communications, Consent and Notifications"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : communicationsConsentNotificationsData &&
              communicationsConsentNotificationsData.length > 0 &&
              patientRefusalData &&
              patientRefusalData.length > 0
            ? communicationsConsentNotificationsRender
            : "Communications, Consent and Notifications data not recorded"}
        </ReportContainer>
      </PatientReportSection>

      {/* Capacity to Consent */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Capacity to Consent"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null ? (
            "Please select a Patient from the Patient list"
          ) : loading ? (
            "Loading..."
          ) : mentalCapacityData &&
            mentalCapacityData.length > 0 &&
            patientDecisionsData &&
            patientDecisionsData.length > 0 ? (
            <>
              {mentalCapacityData && mentalCapacityData.length > 0
                ? mentalCapacityRender
                : null}

              {patientDecisionsData && patientDecisionsData.length > 0
                ? patientDecisionsRender
                : null}

              {patientCapacityData && patientCapacityData.length > 0
                ? patientCapacityRender
                : null}

              {bestInterestData && bestInterestData.length > 0
                ? bestInterestRender
                : null}
            </>
          ) : (
            "Capacity to Consent data not recorded"
          )}
        </ReportContainer>
      </PatientReportSection>

      {/* Sign and Sync */}
      <PatientReportSection>
        <PatientReportHeadingContainer>
          <HeadingOne
            icon="fas fa-file-medical-alt"
            text="Sign and Sync"
            padding="0.6rem"
          />
        </PatientReportHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : loading
            ? "Loading..."
            : signAndSyncData && signAndSyncData.length > 0
            ? signAndSyncRender
            : "Sign and Sync data not recorded"}
        </ReportContainer>
      </PatientReportSection>
    </PatientReportContainer>
  );
}

// Export: PatientReport
export default PatientReport;

// Styled: PatientReportContainer
const PatientReportContainer = styled.div`
  margin: 1rem;
`;

// Styled: PatientReportSection
const PatientReportSection = styled.section`
  background: #ffffff;
  margin-bottom: 1rem;
`;

// Styled: PatientReportRender
const PatientReportRender = styled.div`
  padding: 1rem 0;
`;

// Styled: PatientReportGrid
const PatientReportGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100%;
  width: 100%;
`;

// Styled: PatientReportTableGrid
const PatientReportTableGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
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

// Styled: PatientReportHeadingContainer
const PatientReportHeadingContainer = styled.div`
  background: #e0e0e0;
  width: 100%;
`;

// Styled: PatientReportAddressContainer
const PatientReportAddressContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

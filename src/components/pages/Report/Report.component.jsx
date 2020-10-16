// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

// Import: UI
import PatientNameHeader from "../../UI/PatientNameHeader/PatientNameHeader.component";
import ReportHeader from "../../UI/ReportHeader/ReportHeader.component";

// Import: subPages
import DiagnosisOfDeath from "../../subPages/DiagnosisOfDeath/DiagnosisOfDeath.component";
import Ecg from "../../subPages/Ecg/Ecg.component";
import Media from "../../subPages/Media/Media.component";
import Notes from "../../subPages/Notes/Notes.component";
import PatientReport from "../../subPages/PatientReport/PatientReport.component";
// import Sbar from "../../subPages/Sbar/Sbar.component";

// page: Report
function Report({ selectedPatient, patientListIsOpen }) {
  // State = loading
  const [loading, setLoading] = useState(true);

  // State = Report
  const [cadDetailsData, setCADDetailsData] = useState([]); // Incident Information
  const [patientDetailsData, setPatientDetailsData] = useState([]); // Patient Details
  const [nokData, setNokData] = useState([]); // Patient Details
  const [clinicalObservationsData, setClinicalObservationsData] = useState([]); // Clinical Observations
  const [patientIVData, setPatientIVData] = useState([]); // IV Access and Medications
  const [drugsMedsData, setDrugsMedsData] = useState([]); // IV Access and Medications
  const [cardiacChestPainData, setCardiacChestPainData] = useState([]); // Cardiovascular Assessment
  const [strokeAssessmentData, setStrokeAssessmentData] = useState([]); // Cardiovascular Assessment
  const [airwaysManagementData, setAirwaysManagementData] = useState([]); // Airways Management
  const [cardiacArrestData, setCardiacArrestData] = useState([]); // Cardiac Arrest
  const [transportOptionsData, setTransportOptionsData] = useState([]); // Transport Options
  const [specialistPathwaysData, setSpecialistPathwaysData] = useState([]); // Triage and Pathfinder Support
  const [majorTraumaData, setMajorTraumaData] = useState([]); // Triage and Pathfinder Support
  const [manchesterTriageSystemData, setManchesterTriageSystemData] = useState(
    []
  ); // Triage and Pathfinder Support
  const [pathfindersData, setPathfindersData] = useState([]); // Triage and Pathfinder Support
  const [jointDecisionMakingData, setJointDecisionMakingData] = useState([]); // Triage and Pathfinder Support
  const [skeletalTraumaData, setSkeletalTraumaData] = useState([]); // Trauma Management
  const [burnsData, setBurnsData] = useState([]); // Trauma Management
  const [
    communicationsConsentNotificationsData,
    setCommunicationsConsentNotificationsData,
  ] = useState([]); // Communications, Consent and Notifications
  const [patientRefusalData, setPatientRefusalData] = useState([]); // Communications, Consent and Notifications
  const [mentalCapacityData, setMentalCapacityData] = useState([]); // Capacity to Consent
  const [patientDecisionsData, setPatientDecisionsData] = useState([]); // Capacity to Consent
  const [patientCapacityData, setPatientCapacityData] = useState([]); // Capacity to Consent
  const [bestInterestData, setBestInterestData] = useState([]); // Capacity to Consent
  const [signAndSyncData, setSignAndSyncData] = useState([]); // Sign and Sync

  // State = Notes
  const [notesData, setNotesData] = useState([]); // Notes

  // State = Diagnosis of Death
  const [diagnosisOfDeathData, setdiagnosisOfDeathData] = useState([]); // Diagnosis of Death

  // When selectedPatient changes fetch selected Patient report data from OneResponse APIs
  // If successful, ...Data === OneResponse API data (for selected Patient), loading === false
  // If unsuccessful, catch error
  useEffect(() => {
    async function getApiData() {
      setLoading(true);

      if (selectedPatient !== null) {
        //#region Incident Information Data
        try {
          const cadDetailsApi = `https://cad-message-to-trust-test.azurewebsites.net/CADDetails/ePRID/${selectedPatient}`;
          const cadDetailsResponse = await fetch(cadDetailsApi);
          const cadDetailsApiData = await cadDetailsResponse.json();
          setCADDetailsData(cadDetailsApiData);
        } catch (error) {
          console.log("CAD Details data error: ", error);
          throw new Error("Unable to retrieve CAD Details data.");
        }
        //#endregion /Incident Information Data

        //#region Patient Details Data
        try {
          const patientDetailsApi = `https://cad-message-to-trust-test.azurewebsites.net/PatientDetails/ePRID/${selectedPatient}`;
          const patientDetailsResponse = await fetch(patientDetailsApi);
          const patientDetailsApiData = await patientDetailsResponse.json();
          setPatientDetailsData(patientDetailsApiData);
        } catch (error) {
          console.log("Patient Details data error: ", error);
          throw new Error("Unable to retrieve Patient Details data.");
        }
        //#endregion /Patient Details Data

        //#region Next of Kin data
        try {
          const nokApi = `https://cad-message-to-trust-test.azurewebsites.net/NoK/ePRID/${selectedPatient}`;
          const nokResponse = await fetch(nokApi);
          const nokApiData = await nokResponse.json();
          setNokData(nokApiData);
        } catch (error) {
          console.log("Next of Kin data error: ", error);
          throw new Error("Unable to retrieve Next of Kin data.");
        }
        //#endregion /Next of Kin Data

        //#region Clinical Observations data
        try {
          const clinicalObservationsApi = `https://cad-message-to-trust-test.azurewebsites.net/ClinicalObservations/ePRID/${selectedPatient}`;
          const clinicalObservationsResponse = await fetch(
            clinicalObservationsApi
          );
          const clinicalObservationsApiData = await clinicalObservationsResponse.json();
          setClinicalObservationsData(clinicalObservationsApiData);
        } catch (error) {
          console.log("Clinical Observations data error: ", error);
          throw new Error("Unable to retrieve Clinical Observations data.");
        }
        //#endregion /Clinical Observations data

        //#region Patient IV data
        try {
          const patientIVApi = `https://cad-message-to-trust-test.azurewebsites.net/PatientIV/ePRID/${selectedPatient}`;
          const patientIVResponse = await fetch(patientIVApi);
          const patientIVApiData = await patientIVResponse.json();
          setPatientIVData(patientIVApiData);
        } catch (error) {
          console.log("Patient IV data error: ", error);
          throw new Error("Unable to retrieve Patient IV data.");
        }
        //#endregion /Patient IV data

        //#region Drugs Meds data
        try {
          const drugsMedsApi = `https://cad-message-to-trust-test.azurewebsites.net/DrugsMeds/ePRID/${selectedPatient}`;
          const drugsMedsResponse = await fetch(drugsMedsApi);
          const drugsMedsApiData = await drugsMedsResponse.json();
          setDrugsMedsData(drugsMedsApiData);
        } catch (error) {
          console.log("Drugs / Meds data error: ", error);
          throw new Error("Unable to retrieve Drugs / Meds data.");
        }
        //#endregion Drugs Meds data

        //#region Cardiac Chest Pain data
        try {
          const cardiacChestPainApi = `https://cad-message-to-trust-test.azurewebsites.net/CardiacChestPain/ePRID/${selectedPatient}`;
          const cardiacChestPainResponse = await fetch(cardiacChestPainApi);
          const cardiacChestPainApiData = await cardiacChestPainResponse.json();
          setCardiacChestPainData(cardiacChestPainApiData);
        } catch (error) {
          console.log(error);
          throw new Error("Unable to retrieve Cardiac Chest Pain data.");
        }
        //#endregion /Cardiac Chest Pain data

        //#region Stroke Assessment data
        try {
          const strokeAssessmentApi = `https://cad-message-to-trust-test.azurewebsites.net/StrokeAssessment/ePRID/${selectedPatient}`;
          const strokeAssessmentResponse = await fetch(strokeAssessmentApi);
          const strokeAssessmentApiData = await strokeAssessmentResponse.json();
          setStrokeAssessmentData(strokeAssessmentApiData);
        } catch (error) {
          console.log("Stroke Assessment data error: ", error);
          throw new Error("Unable to retrieve Stroke Assessment data.");
        }
        //#endregion /Stroke Assessment data

        //#region Airways Management data
        try {
          const airwaysManagementApi = `https://cad-message-to-trust-test.azurewebsites.net/AirwaysManagement/ePRID/${selectedPatient}`;
          const airwaysManagementResponse = await fetch(airwaysManagementApi);
          const airwaysManagementApiData = await airwaysManagementResponse.json();
          setAirwaysManagementData(airwaysManagementApiData);
        } catch (error) {
          console.log("Airways Management data error: ", error);
          throw new Error("Unable to retrieve Airways Management data.");
        }
        //#endregion /Airways Management data

        //#region Cardiac Arrest data
        try {
          const cardiacArrestApi = `https://cad-message-to-trust-test.azurewebsites.net/CardiacArrest/ePRID/${selectedPatient}`;
          const cardiacArrestResponse = await fetch(cardiacArrestApi);
          const cardiacArrestApiData = await cardiacArrestResponse.json();
          setCardiacArrestData(cardiacArrestApiData);
        } catch (error) {
          console.log("Cardiac Arrest data error: ", error);
          throw new Error("Unable to retrieve Cardiac Arrest data.");
        }
        //#endregion /Cardiac Arrest data

        //#region Transport Options data
        try {
          const transportOptionsApi = `https://cad-message-to-trust-test.azurewebsites.net/TransportOptions/ePRID/${selectedPatient}`;
          const transportOptionsResponse = await fetch(transportOptionsApi);
          const transportOptionsApiData = await transportOptionsResponse.json();
          setTransportOptionsData(transportOptionsApiData);
        } catch (error) {
          console.log("Transport Options data error: ", error);
          throw new Error("Unable to retrieve Transport Options data.");
        }
        //#endregion /Transport Options data

        //#region Specialist Pathways data
        try {
          const specialistPathwaysApi = `https://cad-message-to-trust-test.azurewebsites.net/SpecialistPathways/ePRID/${selectedPatient}`;
          const specialistPathwaysResponse = await fetch(specialistPathwaysApi);
          const specialistPathwaysApiData = await specialistPathwaysResponse.json();
          setSpecialistPathwaysData(specialistPathwaysApiData);
        } catch (error) {
          console.log("Specialist Pathways data error: ", error);
          throw new Error("Unable to retrieve Specialist Pathways data.");
        }
        //#endregion /Specialist Pathways data

        //#region Major Trauma data
        try {
          const majorTraumaApi = `https://cad-message-to-trust-test.azurewebsites.net/MajorTrauma/ePRID/${selectedPatient}`;
          const majorTraumaResponse = await fetch(majorTraumaApi);
          const majorTraumaApiData = await majorTraumaResponse.json();
          setMajorTraumaData(majorTraumaApiData);
        } catch (error) {
          console.log("Major Trauma data error: ", error);
          throw new Error("Unable to retrieve Major Trauma data.");
        }
        //#endregion Major Trauma data

        //#region Manchester Triage System data
        try {
          const manchesterTriageSystemApi = `https://cad-message-to-trust-test.azurewebsites.net/ManchesterTriageSystem/ePRID/${selectedPatient}`;
          const manchesterTriageSystemResponse = await fetch(
            manchesterTriageSystemApi
          );
          const manchesterTriageSystemApiData = await manchesterTriageSystemResponse.json();
          setManchesterTriageSystemData(manchesterTriageSystemApiData);
        } catch (error) {
          console.log("Manchester Triage System data error: ", error);
          throw new Error("Unable to retrieve Manchester Triage System data.");
        }
        //#endregion /Manchester Triage System data

        //#region Pathfinders data
        try {
          const pathfindersApi = `https://cad-message-to-trust-test.azurewebsites.net/Pathfinders/ePRID/${selectedPatient}`;
          const pathfindersResponse = await fetch(pathfindersApi);
          const pathfindersApiData = await pathfindersResponse.json();
          setPathfindersData(pathfindersApiData);
        } catch (error) {
          console.log("Pathfinders data error: ", error);
          throw new Error("Unable to retrieve Pathfinders data.");
        }
        //#endregion /Pathfinders data

        //#region Joint Decision Making data
        try {
          const jointDecisionMakingApi = `https://cad-message-to-trust-test.azurewebsites.net/JointDecisionMaking/ePRID/${selectedPatient}`;
          const jointDecisionMakingResponse = await fetch(
            jointDecisionMakingApi
          );
          const jointDecisionMakingApiData = await jointDecisionMakingResponse.json();
          setJointDecisionMakingData(jointDecisionMakingApiData);
        } catch (error) {
          console.log("Joint Decision Making data error: ", error);
          throw new Error("Unable to retrieve Joint Decision Making data.");
        }
        //#endregion /Joint Decision Making data

        //#region Skeletal Trauma data
        try {
          const skeletalTraumaApi = `https://cad-message-to-trust-test.azurewebsites.net/SkeletalTrauma/ePRID/${selectedPatient}`;
          const skeletalTraumaResponse = await fetch(skeletalTraumaApi);
          const skeletalTraumaApiData = await skeletalTraumaResponse.json();
          setSkeletalTraumaData(skeletalTraumaApiData);
        } catch (error) {
          console.log("Skeletal Trauma data error: ", error);
          throw new Error("Unable to retrieve Skeletal Trauma data.");
        }
        //#endregion Skeletal Trauma data

        //#region Burns data
        try {
          const burnsApi = `https://cad-message-to-trust-test.azurewebsites.net/Burns/ePRID/${selectedPatient}`;
          const burnsResponse = await fetch(burnsApi);
          const burnsApiData = await burnsResponse.json();
          setBurnsData(burnsApiData);
        } catch (error) {
          console.log("Burns data error: ", error);
          throw new Error("Unable to retrieve Burns data.");
        }
        //#endregion Burns data

        //#region Communications, Consent and Notifications
        try {
          const communicationsConsentNotificationsApi = `https://cad-message-to-trust-test.azurewebsites.net/CommunicationsConsentNotifications/ePRID/${selectedPatient}`;
          const communicationsConsentNotificationsResponse = await fetch(
            communicationsConsentNotificationsApi
          );
          const communicationsConsentNotificationsApiData = await communicationsConsentNotificationsResponse.json();
          setCommunicationsConsentNotificationsData(
            communicationsConsentNotificationsApiData
          );
        } catch (error) {
          console.log(
            "Communications, Consent and Notifications data error: ",
            error
          );
          throw new Error(
            "Unable to retrieve Communications, Consent and Notifications data."
          );
        }
        //#endregion /Communications, Consent and Notifications

        //#region Patient Refusal
        try {
          const patientRefusalApi = `https://cad-message-to-trust-test.azurewebsites.net/PatientRefusal/ePRID/${selectedPatient}`;
          const patientRefusalResponse = await fetch(patientRefusalApi);
          const patientRefusalApiData = await patientRefusalResponse.json();
          setPatientRefusalData(patientRefusalApiData);
        } catch (error) {
          console.log("Patient Refusal data error: ", error);
          throw new Error("Unable to retrieve Patient Refusal data.");
        }
        //#endregion /Communications, Consent and Notifications

        //#region Mental Capacity data
        try {
          const mentalCapacityApi = `https://cad-message-to-trust-test.azurewebsites.net/MentalCapacity/ePRID/${selectedPatient}`;
          const mentalCapacityResponse = await fetch(mentalCapacityApi);
          const mentalCapacityApiData = await mentalCapacityResponse.json();
          setMentalCapacityData(mentalCapacityApiData);
        } catch (error) {
          console.log("Mental Capacity data error: ", error);
          throw new Error("Unable to retrieve Mental Capacity data.");
        }
        //#endregion /Mental Capacity data

        //#region Patient Decisions data
        try {
          const patientDecisionsApi = `https://cad-message-to-trust-test.azurewebsites.net/PatientDecisions/ePRID/${selectedPatient}`;
          const patientDecisionsResponse = await fetch(patientDecisionsApi);
          const patientDecisionsApiData = await patientDecisionsResponse.json();
          setPatientDecisionsData(patientDecisionsApiData);
        } catch (error) {
          console.log("Patient Decisions data error: ", error);
          throw new Error("Unable to retrieve Patient Decisions data.");
        }
        //#endregion /Patient Decisions data

        //#region Patient Capacity data
        try {
          const patientCapacityApi = `https://cad-message-to-trust-test.azurewebsites.net/PatientCapacity/ePRID/${selectedPatient}`;
          const patientCapacityResponse = await fetch(patientCapacityApi);
          const patientCapacityApiData = await patientCapacityResponse.json();
          setPatientCapacityData(patientCapacityApiData);
        } catch (error) {
          console.log("Patient Capacity data error: ", error);
          throw new Error("Unable to retrieve Patient Capacity data.");
        }
        //#endregion /Patient Capacity data

        //#region Best Interest data
        try {
          const bestInterestApi = `https://cad-message-to-trust-test.azurewebsites.net/BestInterest/ePRID/${selectedPatient}`;
          const bestInterestResponse = await fetch(bestInterestApi);
          const bestInterestApiData = await bestInterestResponse.json();
          setBestInterestData(bestInterestApiData);
        } catch (error) {
          console.log("Best Interest data error: ", error);
          throw new Error("Unable to retrieve Best Interest data.");
        }
        //#endregion /Best Interest data

        //#region Sign and Sync data
        try {
          const signAndSyncApi = `https://cad-message-to-trust-test.azurewebsites.net/SignAndSync/ePRID/${selectedPatient}`;
          const signAndSyncResponse = await fetch(signAndSyncApi);
          const signAndSyncApiData = await signAndSyncResponse.json();
          setSignAndSyncData(signAndSyncApiData);
        } catch (error) {
          console.log("Sign and Sync data error: ", error);
          throw new Error("Unable to retrieve Sign and Sync data.");
        }
        //#endregion /Sign and Sync data

        //#region Notes data
        try {
          const notesApi = `https://cad-message-to-trust-test.azurewebsites.net/Notes/ePRID/${selectedPatient}`;
          const notesResponse = await fetch(notesApi);
          const notesApiData = await notesResponse.json();
          setNotesData(notesApiData);
        } catch (error) {
          console.log("Notes data error: ", error);
          throw new Error("Unable to retrieve Notes data.");
        }
        //#endregion /Notes data

        //#region Diagnosis of Death data
        try {
          const diagnosisOfDeathApi = `https://cad-message-to-trust-test.azurewebsites.net/DiagnosisOfDeath/ePRID/${selectedPatient}`;
          const diagnosisOfDeathResponse = await fetch(diagnosisOfDeathApi);
          const diagnosisOfDeathApiData = await diagnosisOfDeathResponse.json();
          setdiagnosisOfDeathData(diagnosisOfDeathApiData);
        } catch (error) {
          console.log("Diagnosis of Death data error: ", error);
          throw new Error("Unable to retrieve Diagnosis of Death data.");
        }
        //#endregion /Diagnosis of Death data
      }
      setLoading(false);
    }

    getApiData();
  }, [selectedPatient]);

  return (
    <ReportContainer>
      <ReportWrapper>
        <PatientNameHeader
          selectedPatient={selectedPatient}
          patientDetailsData={patientDetailsData}
        />
        <ReportHeader patientListIsOpen={patientListIsOpen} />

        <Switch>
          <Route exact path="/">
            <PatientReport
              selectedPatient={selectedPatient}
              cadDetailsData={cadDetailsData}
              patientDetailsData={patientDetailsData}
              nokData={nokData}
              clinicalObservationsData={clinicalObservationsData}
              patientIVData={patientIVData}
              drugsMedsData={drugsMedsData}
              cardiacChestPainData={cardiacChestPainData}
              strokeAssessmentData={strokeAssessmentData}
              airwaysManagementData={airwaysManagementData}
              cardiacArrestData={cardiacArrestData}
              transportOptionsData={transportOptionsData}
              specialistPathwaysData={specialistPathwaysData}
              majorTraumaData={majorTraumaData}
              manchesterTriageSystemData={manchesterTriageSystemData}
              pathfindersData={pathfindersData}
              jointDecisionMakingData={jointDecisionMakingData}
              skeletalTraumaData={skeletalTraumaData}
              burnsData={burnsData}
              communicationsConsentNotificationsData={
                communicationsConsentNotificationsData
              }
              patientRefusalData={patientRefusalData}
              mentalCapacityData={mentalCapacityData}
              patientDecisionsData={patientDecisionsData}
              patientCapacityData={patientCapacityData}
              bestInterestData={bestInterestData}
              signAndSyncData={signAndSyncData}
              loading={loading}
            />
          </Route>

          <Route path="/notes">
            <Notes
              selectedPatient={selectedPatient}
              notesData={notesData}
              loading={loading}
            />
          </Route>

          <Route path="/media">
            <Media selectedPatient={selectedPatient} loading={loading} />
          </Route>

          <Route path="/ecg">
            <Ecg selectedPatient={selectedPatient} loading={loading} />
          </Route>

          <Route path="/diagnosis-of-death">
            <DiagnosisOfDeath
              selectedPatient={selectedPatient}
              diagnosisOfDeathData={diagnosisOfDeathData}
              loading={loading}
            />
          </Route>
        </Switch>
      </ReportWrapper>
    </ReportContainer>
  );
}

// Export: Report
export default Report;

// Styled: ReportContainer
const ReportContainer = styled.div`
  height: auto;
  width: 100%;
`;

// Styled: ReportWrapper
const ReportWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

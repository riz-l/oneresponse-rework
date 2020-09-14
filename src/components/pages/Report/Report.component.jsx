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
import Sbar from "../../subPages/Sbar/Sbar.component";

// page: Report
function Report({ selectedPatient }) {
  // State
  const [patientDetailsData, setPatientDetailsData] = useState([]);
  const [nokData, setNokData] = useState([]);
  const [specialistPathwaysData, setSpecialistPathwaysData] = useState([]);
  const [majorTraumaData, setMajorTraumaData] = useState([]);
  const [manchesterTriageSystemData, setManchesterTriageSystemData] = useState(
    []
  );
  const [pathfindersData, setPathfindersData] = useState([]);
  const [jointDecisionMakingData, setJointDecisionMakingData] = useState([]);
  const [cardiacChestPainData, setCardiacChestPainData] = useState([]);
  const [strokeAssessmentData, setStrokeAssessmentData] = useState([]);
  const [cardiacArrestData, setCardiacArrestData] = useState([]);
  const [patientIVData, setPatientIVData] = useState([]);
  const [drugsMedsData, setDrugsMedsData] = useState([]);
  const [skeletalTraumaData, setSkeletalTraumaData] = useState([]);
  const [burnsData, setBurnsData] = useState([]);
  const [transportOptionsData, setTransportOptionsData] = useState([]);
  const [airwaysManagementData, setAirwaysManagementData] = useState([]);

  // When selectedPatient changes fetch selected Patient report data from OneResponse APIs
  // If successful, ...Data === OneResponse API data (for selected Patient), loading === false
  // If unsuccessful, catch error
  useEffect(() => {
    async function getApiData() {
      if (selectedPatient !== null) {
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
      }
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
        <ReportHeader />

        <Switch>
          <Route exact path="/">
            <Sbar selectedPatient={selectedPatient} />
          </Route>

          <Route path="/sbar">
            <Sbar selectedPatient={selectedPatient} />
          </Route>

          <Route path="/patient-report">
            <PatientReport
              selectedPatient={selectedPatient}
              patientDetailsData={patientDetailsData}
              nokData={nokData}
              specialistPathwayData={specialistPathwaysData}
              majorTraumaData={majorTraumaData}
              manchesterTriageSystemData={manchesterTriageSystemData}
              pathfindersData={pathfindersData}
              jointDecisionMakingData={jointDecisionMakingData}
              cardiacChestPainData={cardiacChestPainData}
              strokeAssessmentData={strokeAssessmentData}
              cardiacArrestData={cardiacArrestData}
              patientIVData={patientIVData}
              drugsMedsData={drugsMedsData}
              skeletalTraumaData={skeletalTraumaData}
              burnsData={burnsData}
              transportOptionsData={transportOptionsData}
              airwaysManagementData={airwaysManagementData}
            />
          </Route>

          <Route path="/notes">
            <Notes selectedPatient={selectedPatient} />
          </Route>

          <Route path="/media">
            <Media selectedPatient={selectedPatient} />
          </Route>

          <Route path="/ecg">
            <Ecg selectedPatient={selectedPatient} />
          </Route>

          <Route path="/diagnosis-of-death">
            <DiagnosisOfDeath selectedPatient={selectedPatient} />
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
  height: 100%;
  width: 100%;
`;

// Styled: ReportWrapper
const ReportWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

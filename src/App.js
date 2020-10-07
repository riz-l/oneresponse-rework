// Import: Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Import: page
import Report from "./components/pages/Report/Report.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";
import PatientList from "./components/UI/PatientList/PatientList.component";

// Component: App
function App() {
  // State = isOpen, selectedPatient
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <AppContainer>
      <AppHeader>
        <Header setIsOpen={setIsOpen} />
      </AppHeader>

      <AppLayout
        style={
          !isOpen
            ? {
                gridTemplateColumns: "0 1fr",
              }
            : null
        }
      >
        <AppPatientList>
          <PatientList
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedPatient={setSelectedPatient}
          />
        </AppPatientList>

        <AppPatientReport>
          <Report selectedPatient={selectedPatient} />
        </AppPatientReport>
      </AppLayout>
    </AppContainer>
  );
}

// Export: App
export default App;

// Styled: AppContainer
const AppContainer = styled.div`
  background: #f0f1f6;
`;

// Styled: AppHeader
const AppHeader = styled.div`
  height: 12vh;
  width: 100%;
`;

// Styled: AppLayout
const AppLayout = styled.div`
  display: grid;
  grid-template-areas: "patient-list report-container";
  grid-template-columns: 400px 1fr;
  grid-template-rows: 88vh;
  transition: all 150ms linear;
`;

// Styled: AppPatientList
const AppPatientList = styled.div`
  grid-area: patient-list;
`;

// Styled: AppPatientReport
const AppPatientReport = styled.div`
  grid-area: report-container;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

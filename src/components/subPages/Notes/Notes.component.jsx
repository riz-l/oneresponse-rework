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

// subPage: Notes
function Notes({selectedPatient, notesData}) {
  //#region presentingComplaintRender = Presenting Complaint report #TODO - Needs testing
  const presentingComplaintRender = notesData.map (
    ({id, AddtItem_PC}) => (
      <NotesRender key={id}>
        <NotesGrid>
          <NotesColumn>
            <ReportField
              data={AddtItem_PC ? AddtItem_PC : "Not recorded"}
            />
          </NotesColumn>
        </NotesGrid>
      </NotesRender>
    )
  );
  //#end region /presentingComplaintRender = Presenting Complaint report

  //#region historyOfPresentingComplaintRender = History of Presenting Complaint report #TODO - Needs testing
  const historyOfPresentingComplaintRender = notesData.map (
    ({id, AddtItem_HPC}) => (
      <NotesRender key={id}>
        <NotesGrid>
          <NotesColumn>
            <ReportField
              data={AddtItem_HPC ? AddtItem_HPC : "Not recorded"}
            />
          </NotesColumn>
        </NotesGrid>
      </NotesRender>
    )
  );
  //#end region /historyOfPresentingComplaintRender = History of Presenting Complaint report

  //#region previousMedicalHistoryRender = Previous Medical History report #TODO - Needs testing
  const previousMedicalHistoryRender = notesData.map (
    ({id, AddtItem_PMH}) => (
      <NotesRender key={id}>
        <NotesGrid>
          <NotesColumn>
            <ReportField
              data={AddtItem_PMH ? AddtItem_PMH : "Not recorded"}
            />
          </NotesColumn>
        </NotesGrid>
      </NotesRender>
    )
  );
  //#end region /previousMedicalHistoryRender = Previous Medical History report

  //#region socialHistoryRender = Social History report #TODO - Needs testing
  const socialHistoryRender = notesData.map (
    ({id, AddtItem_Social_History}) => (
      <NotesRender key={id}>
        <NotesGrid>
          <NotesColumn>
            <ReportField
              data={AddtItem_Social_History ? AddtItem_Social_History : "Not recorded"}
            />
          </NotesColumn>
        </NotesGrid>
      </NotesRender>
    )
  );
  //#end region /socialHistoryRender = Social History report

  //#region familyHistoryRender = Family History report #TODO - Needs testing
  const familyHistoryRender = notesData.map (
    ({id, AddtItem_Family_History}) => (
      <NotesRender key={id}>
        <NotesGrid>
          <NotesColumn>
            <ReportField
              data={AddtItem_Family_History ? AddtItem_Family_History : "Not recorded"}
            />
          </NotesColumn>
        </NotesGrid>
      </NotesRender>
    )
  );
  //#end region /familyHistoryRender = Family History report

  return (
    <NotesContainer>
      {/* Presenting Complaint */}
      <NotesSection>
        <NotesHeadingContainer>
          <HeadingOne
            icon="fas fa-sticky-note"
            text="Presenting Complaint"
            padding="0.6rem"
          />
        </NotesHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : notesData && notesData.length > 0
            ? presentingComplaintRender
            : "Presenting Complaint data not recorded"}
        </ReportContainer>
      </NotesSection>

      {/* History of Presenting Complaint */}
      <NotesSection>
        <NotesHeadingContainer>
          <HeadingOne
            icon="fas fa-sticky-note"
            text="History of Presenting Complaint"
            padding="0.6rem"
          />
        </NotesHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : notesData && notesData.length > 0
            ? historyOfPresentingComplaintRender
            : "History of Presenting Complaint data not recorded"}
        </ReportContainer>
      </NotesSection>

      {/* Previous Medical History */}
      <NotesSection>
        <NotesHeadingContainer>
          <HeadingOne
            icon="fas fa-sticky-note"
            text="Previous Medical History"
            padding="0.6rem"
          />
        </NotesHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : notesData && notesData.length > 0
            ? previousMedicalHistoryRender
            : "Previous Medical History data not recorded"}
        </ReportContainer>
      </NotesSection>

      {/* Social History */}
      <NotesSection>
        <NotesHeadingContainer>
          <HeadingOne
            icon="fas fa-sticky-note"
            text="Social History"
            padding="0.6rem"
          />
        </NotesHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : notesData && notesData.length > 0
            ? socialHistoryRender
            : "Social History data not recorded"}
        </ReportContainer>
      </NotesSection>

      {/* Family History */}
      <NotesSection>
        <NotesHeadingContainer>
          <HeadingOne
            icon="fas fa-sticky-note"
            text="Family History"
            padding="0.6rem"
          />
        </NotesHeadingContainer>

        <ReportContainer>
          {selectedPatient === null
            ? "Please select a Patient from the Patient list"
            : notesData && notesData.length > 0
            ? familyHistoryRender
            : "Family History data not recorded"}
        </ReportContainer>
      </NotesSection>
    </NotesContainer>
  );
}

// Export:Notes
export default Notes;

// Styled: NotesContainer
const NotesContainer = styled.div`
  margin: 1rem;
`;

// Styled: NotesSection
const NotesSection = styled.section`
  background: #ffffff;
  margin-bottom: 1rem;
`;

// Styled: NotesRender
const NotesRender = styled.div`
  padding: 1rem 0;
`;

// Styled: NotesGrid
const NotesGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100%;
  width: 100%;
`;

// Styled: NotesColumn
const NotesColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

// Styled: NotesHeadingContainer
const NotesHeadingContainer = styled.div`
  background: #e0e0e0;
  width: 100%;
`;

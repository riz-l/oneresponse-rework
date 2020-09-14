// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import HeadingOne from "../../UI/Headings/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/Headings/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/Headings/HeadingThree/HeadingThree.component";
import HeadingFour from "../../UI/Headings/HeadingFour/HeadingFour.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";

// subPage: Notes
function Notes() {
  return (
    <NotesContainer>
      <ReportContainer>
        <HeadingOne icon="fas fa-sticky-note" text="Notes" />
        <HeadingTwo text="Heading 2" />
        <HeadingThree text="Heading 3" />
        <HeadingFour text="Heading 4" />
      </ReportContainer>
    </NotesContainer>
  );
}

// Export: Notes
export default Notes;

// Styled: NotesContainer
const NotesContainer = styled.div`
  margin: 1rem;
`;

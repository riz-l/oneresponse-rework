// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: PatientNameHeader
function PatientNameHeader({ selectedPatient }) {
  // Renders a selected Patient's Firstname, Surname and Master_ePR_ID
  // const patientNameRender = patientDetailsData.map(
  //   ({ id, Master_ePR_ID, PD_Firstname, PD_Surname }) => (
  //     <PatientNameHeaderContainer key={id}>
  //       <PatientNameHeaderWrapper>
  //         <PatientNameHeaderRow>
  //           <PatientNameHeaderFirstname>
  //             {PD_Firstname ? PD_Firstname : <span>Forename</span>}
  //           </PatientNameHeaderFirstname>

  //           <PatientNameHeaderSurname>
  //             {PD_Surname ? PD_Surname : <span>Surname</span>}
  //           </PatientNameHeaderSurname>
  //         </PatientNameHeaderRow>

  //         <PatientNameHeaderIdContainer>
  //           <span>Master ePR ID:</span>
  //           <PatientNameHeaderId>
  //             {Master_ePR_ID ? Master_ePR_ID : <span>Master ePR ID</span>}
  //           </PatientNameHeaderId>
  //         </PatientNameHeaderIdContainer>
  //       </PatientNameHeaderWrapper>
  //     </PatientNameHeaderContainer>
  //   )
  // );

  // If selectedPatient === null, render select Patient prompt
  // If selectedPatient !== null, render {patientNameRender}
  return (
    <>
      {selectedPatient === null ? (
        <PatientNameHeaderPrompt>
          <Icon icon="fas fa-exclamation-triangle" />
          <span>Please select a Patient</span>
        </PatientNameHeaderPrompt>
      ) : null}
    </>
  );
}

// Export: PatientNameHeader
export default PatientNameHeader;

// Styled: PatientNameHeaderPrompt
const PatientNameHeaderPrompt = styled.div`
  align-items: center;
  background: rgba(255, 99, 71, 1);
  display: flex;
  justify-content: flex-start;
  letter-spacing: 1.4px;
  padding: 1rem;
  text-transform: uppercase;
  width: 100vw;

  & i {
    color: rgb(126, 24, 24);
    margin-right: 1rem;
  }

  & span {
    color: rgb(126, 24, 24);
  }
`;

// Styled: PatientNameHeaderContainer
// const PatientNameHeaderContainer = styled.div`
//   align-items: center;
//   background: #ffffff;
//   display: flex;
//   justify-content: flex-start;
//   padding: 1rem;
//   width: 100%;
// `;

// Styled: PatientNameHeaderWrapper
// const PatientNameHeaderWrapper = styled.div`
//   align-items: flex-start;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// Styled: PatientNameHeaderRow
// const PatientNameHeaderRow = styled.div`
//   align-items: center;
//   display: flex;
//   height: 100%;
//   justify-content: center;

//   @media screen and (max-width: 468px) {
//     align-items: flex-start;
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// Styled: PatientNameHeaderFirstname
// const PatientNameHeaderFirstname = styled.span`
//   color: #414141;
//   font-size: 2.2rem;
//   font-weight: 600;
//   letter-spacing: 1.4px;

//   @media screen and (max-width: 748px) {
//     font-size: 1.6rem;
//   }

//   @media screen and (max-width: 564px) {
//     font-size: 1.2rem;
//   }

//   @media screen and (max-width: 468px) {
//     margin-left: 0;
//   }

//   @media screen and (max-width: 368px) {
//     font-size: 1rem;
//   }

//   & span {
//     color: #414141;
//     font-size: 2.2rem;
//     font-weight: 300;
//     letter-spacing: 1.4px;

//     @media screen and (max-width: 748px) {
//       font-size: 1.6rem;
//     }

//     @media screen and (max-width: 564px) {
//       font-size: 1.2rem;
//     }

//     @media screen and (max-width: 468px) {
//       margin-left: 0;
//     }

//     @media screen and (max-width: 368px) {
//       font-size: 1rem;
//     }
//   }
// `;

// Styled: PatientNameHeaderSurname
// const PatientNameHeaderSurname = styled.span`
//   color: #414141;
//   font-size: 2.2rem;
//   font-weight: 600;
//   letter-spacing: 1.4px;
//   margin-left: 10px;

//   @media screen and (max-width: 748px) {
//     font-size: 1.6rem;
//   }

//   @media screen and (max-width: 564px) {
//     font-size: 1.2rem;
//   }

//   @media screen and (max-width: 468px) {
//     margin-left: 0;
//   }

//   @media screen and (max-width: 368px) {
//     font-size: 1rem;
//   }

//   & span {
//     color: #414141;
//     font-size: 2.2rem;
//     font-weight: 300;
//     letter-spacing: 1.4px;

//     @media screen and (max-width: 748px) {
//       font-size: 1.6rem;
//     }

//     @media screen and (max-width: 564px) {
//       font-size: 1.2rem;
//     }

//     @media screen and (max-width: 368px) {
//       font-size: 1rem;
//     }
//   }
// `;

// Styled: PatientNameHeaderIdContainer
// const PatientNameHeaderIdContainer = styled.div`
//   align-items: flex-start;
//   display: flex;
//   justify-content: flex-start;
//   width: 100%;

//   & span {
//     color: #2c2c2c;
//   }

//   @media screen and (max-width: 468px) {
//     display: none;
//   }
// `;

// Styled: PatientNameHeaderId
// const PatientNameHeaderId = styled.span`
//   color: #414141;
//   margin-left: 1rem;
// `;

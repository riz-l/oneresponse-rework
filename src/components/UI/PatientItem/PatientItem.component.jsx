// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: PatientItem
function PatientItem({
  id,
  PD_Firstname,
  PD_Surname,
  PD_Gender,
  PD_DOB,
  MasterID,
  ePR_CallSign,
  complete,
}) {
  // Truncates the MasterID (Master_ePR_ID) from the last "-"
  const masterIdString = MasterID.split("-").pop();

  return (
    <PatientItemContainer key={id}>
      <PatientItemIcon className="PatientItemIcon-hover">
        <Icon icon="fas fa-user-alt" />
      </PatientItemIcon>

      <PatientItemWrapper>
        <PatientItemSecondWrapper>
          <PatientItemNameContainer>
            <PatientItemName>
              {PD_Firstname ? PD_Firstname : <span>Firstname</span>}
            </PatientItemName>

            <PatientItemName>
              {PD_Surname ? PD_Surname : <span>Surname</span>}
            </PatientItemName>
          </PatientItemNameContainer>

          <PatientItemOtherContainer>
            <PatientItemOther>
              {PD_Gender ? PD_Gender : <span>Gender</span>}
            </PatientItemOther>

            <PatientItemOther>
              {PD_DOB ? PD_DOB : <span>Date of Birth</span>}
            </PatientItemOther>
          </PatientItemOtherContainer>
        </PatientItemSecondWrapper>

        <PatientItemStatus>
          <PatientItemStatusText>
            {MasterID ? "..." + masterIdString : "Null"}
          </PatientItemStatusText>

          <PatientItemStatusText>
            {ePR_CallSign ? ePR_CallSign : <span>ePR CallSign</span>}
          </PatientItemStatusText>

          <PatientItemStatusText>
            <p>Status:</p>
            {complete ? <span>Ready to Print</span> : <span>In Progress</span>}
          </PatientItemStatusText>
        </PatientItemStatus>
      </PatientItemWrapper>
    </PatientItemContainer>
  );
}

// Export: PatientItem
export default PatientItem;

// Styled: PatientItemContainer
const PatientItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  height: 100%;
  justify-content: flex-start;
  padding: 0.6rem 0.5rem;
  width: 100%;
  transition: all 500ms linear;
  -webkit-transition: all 500ms linear;

  &:hover {
    background: #2c2c2c;
    cursor: pointer;
    transition: background 150ms linear;

    .PatientItemIcon-hover {
      background: #414141;
      border-radius: 10px;
      transition: all 500ms linear;
    }
  }
`;

// Styled: PatientItemIcon
const PatientItemIcon = styled.div`
  align-items: center;
  background: #2c2c2c;
  border-radius: 50%;
  display: flex;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  justify-content: center;
  padding: 0.2rem;
  width: 55px;
  min-width: 55px;
  max-width: 55px;

  & i {
    color: #ffffff;
    font-size: 1.2rem;
  }
`;

// Styled: PatientItemWrapper
const PatientItemWrapper = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Styled: PatientItemSecondWrapper
const PatientItemSecondWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Styled: PatientItemNameContainer
const PatientItemNameContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  letter-spacing: 0.8px;
  padding: 0.4rem 0 0.4rem 1rem;
  width: 100%;
`;

// Styled: PatientItemName
const PatientItemName = styled.span`
  width: 210px;
  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  & span {
    font-weight: lighter;
    opacity: 0.8;
  }
`;

// Styled: PatientItemOtherContainer
const PatientItemOtherContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem 0 0.4rem 1rem;
`;

// Styled: PatientItemOther
const PatientItemOther = styled.span`
  font-size: 14px;

  & span {
    font-weight: lighter;
    opacity: 0.8;
  }
`;

// Styled: PatientItemStatus
const PatientItemStatus = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.2rem;
  text-align: right;
`;

// Styled: PatientItemStatusText
const PatientItemStatusText = styled.span`
  font-size: 12px;

  & span {
    font-weight: lighter;
    opacity: 0.8;
  }

  & p {
    font-size: 12px;
    margin-top: 1rem;
  }
`;

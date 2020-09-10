// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: PatientItem
function PatientItem({
  PD_Firstname,
  PD_Surname,
  PD_Gender,
  PD_DOB,
  ePR_CallSign,
}) {
  return (
    <PatientItem__Container>
      <PatientItem__Icon className="PatientItem__Icon-hover">
        <Icon icon="fas fa-user-alt" />
      </PatientItem__Icon>

      <PatientItem__Wrapper>
        <PatientItem__SecondWrapper>
          <PatientItem__NameContainer>
            <PatientItem__Name>
              {PD_Firstname ? PD_Firstname : <span>Firstname</span>}
            </PatientItem__Name>

            <PatientItem__Name>
              {PD_Surname ? PD_Surname : <span>Surname</span>}
            </PatientItem__Name>
          </PatientItem__NameContainer>

          <PatientItem__OtherContainer>
            <PatientItem__Other>
              {PD_Gender ? PD_Gender : <span>Gender</span>}
            </PatientItem__Other>

            <PatientItem__Other>
              {PD_DOB ? PD_DOB : <span>Date of Birth</span>}
            </PatientItem__Other>
          </PatientItem__OtherContainer>
        </PatientItem__SecondWrapper>

        <PatientItem__Status>
          <PatientItem__StatusText>
            {ePR_CallSign ? ePR_CallSign : <span>ePR CallSign</span>}
            <p>Status:</p>
          </PatientItem__StatusText>
        </PatientItem__Status>
      </PatientItem__Wrapper>
    </PatientItem__Container>
  );
}

// Export: PatientItem
export default PatientItem;

// Styled: PatientItem__Container
const PatientItem__Container = styled.div`
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

    .PatientItem__Icon-hover {
      background: #414141;
      border-radius: 10px;
      transition: all 500ms linear;
    }
  }
`;

// Styled: PatientItem__Icon
const PatientItem__Icon = styled.div`
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

// Styled: PatientItem__Wrapper
const PatientItem__Wrapper = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Styled: PatientItem__SecondWrapper
const PatientItem__SecondWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Styled: PatientItem__NameContainer
const PatientItem__NameContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  letter-spacing: 0.8px;
  padding: 0.4rem 0 0.4rem 1rem;
  width: 100%;
`;

// Styled: PatientItem__Name
const PatientItem__Name = styled.span`
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

// Styled: PatientItem__OtherContainer
const PatientItem__OtherContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem 0 0.4rem 1rem;
`;

// Styled: PatientItem__Other
const PatientItem__Other = styled.span`
  font-size: 14px;

  & span {
    font-weight: lighter;
    opacity: 0.8;
  }
`;

// Styled: PatientItem__Status
const PatientItem__Status = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.2rem;
  text-align: right;
`;

// Styled: PatientItem__StatusText
const PatientItem__StatusText = styled.span`
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

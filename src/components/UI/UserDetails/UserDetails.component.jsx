// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: UserDetails
function UserDetails() {
  return (
    <UserDetailsContainer>
      <UserDetailsTest>
        <span>jldxc</span>
        <span>DXC Super User</span>
      </UserDetailsTest>

      <UserDetailsIcon>
        <Icon icon="fas fa-users" />
      </UserDetailsIcon>
    </UserDetailsContainer>
  );
}

// Export: UserDetails
export default UserDetails;

// Styled: UserDetailsContainer
const UserDetailsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

// Styled: UserDetailsText
const UserDetailsTest = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  text-align: right;

  & span {
    color: #fff;
    font-size: 0.8rem;

    @media screen and (max-width: 518px) {
      display: none;
    }
  }
`;

// Styled: UserDetailsIcon
const UserDetailsIcon = styled.div`
  background: #2c2c2c;
  padding: 0.4rem;

  & i {
    color: #ffffff;
    font-size: 1.4rem;
  }
`;

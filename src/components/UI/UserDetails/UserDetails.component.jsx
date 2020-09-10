// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: UserDetails
function UserDetails() {
  return (
    <UserDetails__Container>
      <UserDetails__Test>
        <span>jldxc</span>
        <span>DXC Super User</span>
      </UserDetails__Test>

      <UserDetails__Icon>
        <Icon icon="fas fa-users" />
      </UserDetails__Icon>
    </UserDetails__Container>
  );
}

// Export: UserDetails
export default UserDetails;

// Styled: UserDetails__Container
const UserDetails__Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

// Styled: UserDetails__Text
const UserDetails__Test = styled.div`
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

// Styled: UserDetails__Icon
const UserDetails__Icon = styled.div`
  background: #2c2c2c;
  padding: 0.4rem 0.6rem;

  & i {
    color: #ffffff;
    font-size: 1.4rem;
  }
`;

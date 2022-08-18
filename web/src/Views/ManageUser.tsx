import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../Components/List";
import Button from "../Components/Button";
import { IUserProps } from "../Utils/Iterfaces";
const StyledManageUser = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.default.border};
  border-radius: 0.5em;
  padding: 1em;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme.color.primary.midnight100};
    }
  }
`;

interface ManageUserProps {}

const ManageUser: React.FC<ManageUserProps> = ({}) => {
  const [users, setUsers] = useState<IUserProps[]>([]);
  useEffect(() => {
    setUsers([
      {
        id: "111111",
        email: "superbahbi@gmail.com",
        firstName: "Robert",
        lastName: "Kugler",
        role: "admin",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
      {
        id: "222222",
        email: "bahbi@bahbi.net",
        firstName: "Bahbi",
        lastName: "Lee",
        role: "Doctor",
        status: "active",
      },
    ]);
  }, []);
  return (
    <StyledManageUser>
      <div className="header">
        <div className="title">Manage User</div>
      </div>
      <List users={users} />
      <Button />
    </StyledManageUser>
  );
};
export default ManageUser;

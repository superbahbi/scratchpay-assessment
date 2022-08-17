import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../Components/List";
import Button from "../Components/Button";
import Logo from "../Assets/Images/Brand-logo-Scratch-Horz-RGB@2x.png";
import { IUserProps } from "../Utils/Iterfaces";
const StyledManageUser = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
    .image {
      img {
        height: 2rem;
      }
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
    ]);
  }, []);
  return (
    <StyledManageUser>
      <div className="header">
        <div className="title">Manage User</div>
        <div className="image">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      <List users={users}></List>
      <Button></Button>
    </StyledManageUser>
  );
};
export default ManageUser;

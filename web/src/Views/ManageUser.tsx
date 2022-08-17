import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../Components/List";
import Button from "../Components/Button";
import { IUserProps } from "../Utils/Iterfaces";
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.color.default.border};
  border-radius: 0.5em;
  padding: 1em;
`;
const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.color.primary.midnight100};
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
    ]);
  }, []);
  return (
    <Container>
      <Header>Manage User</Header>
      <List users={users}></List>
      <Button></Button>
    </Container>
  );
};
export default ManageUser;

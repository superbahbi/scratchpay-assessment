import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as NewUser } from "../Assets/Icons/new-user.svg";
import Button from "../Components/Button";
import Form from "../Components/Form";
import List from "../Components/List";
import Modal from "../Components/Modal";
import { IManageUserProps, IUserProps } from "../Utils/Iterfaces";
const StyledManageUser = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.default.border};
  border-radius: 0.5em;
  padding: 1em;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
    .title {
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme.color.primary.midnight100};
    }
  }
`;

const ManageUser: React.FC<IManageUserProps> = ({}) => {
  const [users, setUsers] = useState<IUserProps[]>([]);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchData();
  }, []);
  return (
    <StyledManageUser>
      <div className="header">
        <div className="title">Manage User</div>
        <Button onHandleClick={() => Toggle()}>
          <NewUser />
          Add New User
        </Button>
      </div>
      <List users={users} setUsers={setUsers} />

      <Modal show={modal} close={() => Toggle()}>
        <Form
          users={users}
          setUsers={setUsers}
          close={Toggle}
          formTitle="New user"
          formType="Add"
        />
      </Modal>
    </StyledManageUser>
  );
};
export default ManageUser;

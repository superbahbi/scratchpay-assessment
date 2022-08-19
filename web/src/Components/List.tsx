import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as Delete } from "../Assets/Icons/delete.svg";
import { ReactComponent as Edit } from "../Assets/Icons/edit.svg";
import IconButton from "../Components/IconButton";
import { IListProps, IUserProps } from "../Utils/Iterfaces";
import Form from "./Form";
import Modal from "./Modal";

const StyledList = styled.div`
  color: ${(props) => props.theme.color.primary.midnight100};
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    font-family: sans-serif;
    min-width: 400px;
  }
  .styled-table thead tr {
    background-color: ${(props) => props.theme.color.primary.midnight100};
    color: ${(props) => props.theme.color.default.white};
    text-align: left;
  }
  .styled-table th,
  .styled-table td {
    padding: 0.75rem 1rem;
  }
  .styled-table tbody tr {
    border-bottom: 1px solid ${(props) => props.theme.color.default.border};
  }

  .id {
    color: ${(props) => props.theme.color.default.lightText};
  }
  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .email {
    max-width: 9.375rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .role {
    text-transform: capitalize;
  }
  .status {
    text-transform: capitalize;

    .text {
      border-radius: 9999px;
      padding: 0.2rem 0.8rem;
    }
    .active {
      background-color: ${(props) => props.theme.color.secondary.mint};
    }
    .inactive {
      background-color: ${(props) => props.theme.color.secondary.sunset};
    }
  }
  .action {
  }
`;

const List: React.FC<IListProps> = ({ users, setUsers }) => {
  const theme = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  const [editUser, setEditUser] = useState<IUserProps>();
  const Toggle = () => setModal(!modal);
  return (
    <StyledList>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="id">#{user.id}</td>
              <td className="name">
                {user.firstName} {user.lastName}
              </td>
              <td className="email">{user.email}</td>
              <td className="role">{user.role}</td>
              <td className="status">
                <span
                  className={`text ${
                    user.status === "active" ? "active" : "inactive"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="action">
                <div className="icon">
                  <IconButton
                    index={index}
                    color={theme.color.secondary.sea}
                    onHandleClick={() => {
                      Toggle();
                      setEditUser(user);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    index={index}
                    color={theme.color.secondary.sunset}
                    onHandleClick={() => {
                      // console.log(index);

                      setUsers([
                        ...users.slice(0, index),
                        ...users.slice(index + 1),
                      ]);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={modal} close={() => Toggle()}>
        <Form
          users={users}
          setUsers={setUsers}
          close={Toggle}
          formTitle="Edit user"
          formType="Edit"
          editUser={editUser}
        />
      </Modal>
    </StyledList>
  );
};
export default List;

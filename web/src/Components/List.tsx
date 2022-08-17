import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { IUserProps } from "../Utils/Iterfaces";
import IconButton from "../Components/IconButton";
import { ReactComponent as Edit } from "../Assets/Icons/edit.svg";
import { ReactComponent as Delete } from "../Assets/Icons/delete.svg";
const StyledList = styled.div`
  color: ${(props) => props.theme.color.primary.midnight100};
  header,
  .row {
    display: flex;
  }
  .col {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5em 0;
    border-bottom: 1px solid ${(props) => props.theme.color.default.border};
  }

  .personal-info-group {
    display: flex;
    width: 200px;
    align-items: center;
    .name-id-group {
      padding-left: 1rem;
      .id {
        color: ${(props) => props.theme.color.default.lightText};
      }
    }
  }
  .email {
  }
  .role {
    text-transform: capitalize;
  }
  .status {
    text-transform: capitalize;
  }
  .icon {
  }
`;
const Avatar = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme.color.avatar[Math.floor(Math.random() * 4)]};
  .initials {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.color.default.white};
  }
`;

interface ListProps {
  users: IUserProps[];
}

const List: React.FC<ListProps> = ({ users }) => {
  const theme = useContext(ThemeContext);
  function getInitials(fistName: string, lastName: string) {
    return fistName.split(" ")[0].charAt(0) + lastName.split(" ")[0].charAt(0);
  }
  return (
    <StyledList>
      <header>
        <div className="col">Name</div>
        <div className="col">Email</div>
        <div className="col">Role</div>
        <div className="col">Status</div>
        <div className="col"></div>
      </header>

      {users.map((user) => (
        <div className="row" key={user.id}>
          <div className="col">
            <div className="personal-info-group">
              <Avatar>
                <div className="initials">
                  {getInitials(user.firstName, user.lastName)}
                </div>
              </Avatar>
              <div className="name-id-group">
                <div className="name">
                  {user.firstName} {user.lastName}
                </div>
                <div className="id">#{user.id}</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="email">
              <span>{user.email}</span>
            </div>
          </div>
          <div className="col">
            <div className="role">
              <span>{user.role}</span>
            </div>
          </div>
          <div className="col">
            <div className="status">
              <span>{user.status}</span>
            </div>
          </div>
          <div className="col">
            <div className="icon">
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton color={theme.color.secondary.sunset}>
                <Delete />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </StyledList>
  );
};
export default List;

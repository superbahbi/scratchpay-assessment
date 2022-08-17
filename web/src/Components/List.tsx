import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { IUserProps } from "../Utils/Iterfaces";
import IconButton from "../Components/IconButton";
import { ReactComponent as Edit } from "../Assets/Icons/edit.svg";
import { ReactComponent as Delete } from "../Assets/Icons/delete.svg";
const StyledList = styled.div`
  color: ${(props) => props.theme.color.primary.midnight100};
  padding-bottom: 2em;
  ul {
    list-style: none;
    padding: 0;
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .personal-info-group {
    display: flex;
    align-items: center;
    .avatar {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primary.midnight50};
      .initials {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        color: ${(props) => props.theme.color.default.white};
      }
    }
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
    display: flex;
  }
`;
interface ListProps {
  users: IUserProps[];
}

const List: React.FC<ListProps> = ({ users }) => {
  const theme = useContext(ThemeContext);
  function getInitials(fistName: string, lastName: string) {
    const fN = fistName.split(" ");
    const ln = lastName.split(" ");
    return fN[0].charAt(0) + ln[0].charAt(0);
  }
  return (
    <StyledList>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="list">
              <div className="personal-info-group">
                <div className="avatar">
                  <div className="initials">
                    {getInitials(user.firstName, user.lastName)}
                  </div>
                </div>
                <div className="name-id-group">
                  <div className="name">
                    {user.firstName} {user.lastName}
                  </div>
                  <div className="id">#{user.id}</div>
                </div>
              </div>
              <div className="email">
                <span>{user.email}</span>
              </div>
              <div className="role">
                <span>{user.role}</span>
              </div>
              <div className="status">
                <span>{user.status}</span>
              </div>
              <div className="icon">
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton color={theme.color.secondary.sunset}>
                  <Delete />
                </IconButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StyledList>
  );
};
export default List;

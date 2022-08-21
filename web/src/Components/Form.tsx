import React, { useState } from "react";
import styled from "styled-components";
import { IFormError, IFormProps, IUserProps } from "../Utils/Iterfaces";
import Button from "./Button";
import { fetchDB } from "../Utils/Fetch";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.primary.midnight100};
  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.color.default.border};
    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.color.primary.midnight100};
    }
  }
  label {
    font-size: 0.8rem;
  }
  select {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.color.default.border};
    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.color.primary.midnight100};
    }
  }
  option {
    font-size: 0.9rem;
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;
  }
  .error {
    border: 1px solid ${(props) => props.theme.color.secondary.sunset};
  }
`;

/**
 * Form component
 * @param { IUserProps[] } users - users array
 * @param { React.Dispatch<React.SetStateAction<IUserProps[]>> } setUsers - set users array
 * @param { () => void } close - close modal function
 * @param { string } formTitle - set form title
 * @param { string } formType - set form type "Add" or "Edit"
 * @param { IUserProps } editUser - edit user object
 */
const Form: React.FC<IFormProps> = ({
  users,
  setUsers,
  close,
  formTitle,
  formType,
  editUser,
}) => {
  const [formData, setFormData] = useState<IUserProps>({
    id: editUser?.id || "",
    email: editUser?.email || "",
    firstName: editUser?.firstName || "",
    lastName: editUser?.lastName || "",
    role: editUser?.role || "",
    status: editUser?.status || "",
  });
  const [error, setError] = useState<IFormError | null>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formType === "Add") {
      fetchDB("/users", "POST", formData).then((res) => {
        if (res.status === 200) {
          setUsers([...users, res.data]);
        }
      });
    } else if (formType === "Edit") {
      fetchDB("/users", "PUT", formData).then((res) => {
        if (res.status === 200) {
          setUsers(
            users.map((user) => {
              if (user.id === res.data.id) {
                return res.data;
              } else {
                return user;
              }
            })
          );
        }
      });
    }
    setFormData({
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      role: "",
      status: "",
    });
    close();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      users.map((user) =>
        user.email === e.target.value
          ? setError({ email: "Email already exists" })
          : setError(null)
      );
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [(e.target as HTMLSelectElement).name]: (e.target as HTMLSelectElement)
        .value,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>{formTitle}</h3>
      <input type="text" name="id" defaultValue={editUser?.id} hidden />
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        defaultValue={editUser?.firstName}
        required
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        defaultValue={editUser?.lastName}
        required
      />
      <label>Email:</label>
      <input
        className={error?.email ? "error" : ""}
        type="email"
        name="email"
        onChange={handleChange}
        defaultValue={editUser?.email}
        required
      />
      <label>Role:</label>
      <select
        name="role"
        onChange={handleSelectChange}
        defaultValue={editUser?.role}
        required
      >
        <option hidden></option>
        <option value="admin">Admin</option>
        <option value="accountant">Accountant</option>
        <option value="doctor">Doctor</option>
      </select>
      <label>Status:</label>
      <select
        name="status"
        onChange={handleSelectChange}
        defaultValue={editUser?.status}
        required
      >
        <option hidden></option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <div className="btn-container">
        <Button disabled={error?.email ? true : false} type="submit">
          {formType}
        </Button>
      </div>
    </StyledForm>
  );
};
export default Form;

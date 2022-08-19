import { Dispatch, SetStateAction } from "react";

export interface IUserProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
}
export interface IListProps {
  users: IUserProps[];
  setUsers: Dispatch<SetStateAction<IUserProps[]>>;
}
export interface IIconButtonProps {
  index?: number;
  color?: string;
  children: React.ReactNode;
  onHandleClick?: () => void;
}
export interface IButtonProps {
  onHandleClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}
export interface IFormProps {
  users: IUserProps[];
  setUsers: Dispatch<SetStateAction<IUserProps[]>>;
  close: () => void;
  formTitle: string;
  formType: "Add" | "Edit";
  editUser?: IUserProps;
}
export interface IModalProps {
  show: boolean;
  close?: () => void;
  children: React.ReactNode;
}
export interface INavbarProps {}
export interface IManageUserProps {}

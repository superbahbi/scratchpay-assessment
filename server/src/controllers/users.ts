import { IUserProps } from "./../../../web/src/Utils/Iterfaces";
import { NextFunction, Request, Response } from "express";

import users from "../data/users.json";
const getAllUsers = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "User list",
    data: users,
  });
};

const getUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  return res.status(200).json({
    message: id,
  });
};
const addUser = async (req: Request, res: Response) => {
  const data: Object = req.body;

  //TODO: data validation
  const newUser = {
    ...data,
    id: String(new Date().valueOf()).substring(3, 13),
  };
  return res.status(200).json({
    message: "User added",
    data: newUser,
  });
};
const updateUser = async (req: Request, res: Response) => {
  const updatedUser: IUserProps = req.body;
  // TODO: data validation
  const index = users.findIndex((user) => user.id === updatedUser.id);
  users.splice(index, 1, updatedUser);
  return res.status(200).json({
    message: "User updated",
    data: updatedUser,
  });
};
const deleteUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
  return res.status(200).json({
    message: "User deleted",
    data: id,
  });
};
export default { getAllUsers, getUser, addUser, updateUser, deleteUser };

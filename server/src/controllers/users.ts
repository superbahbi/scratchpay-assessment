import { NextFunction, Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "success",
  });
};
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;
  return res.status(200).json({
    message: id,
  });
};
export default { getAllUsers, getUser };

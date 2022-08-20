import { NextFunction, Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  return res.status(200).json([
    {
      id: "3450465015",
      firstName: "Lucho",
      lastName: "Carmen",
      email: "lcarmen0@spiegel.de",
      role: "admin",
      status: "inactive",
    },
    {
      id: "1113021225",
      firstName: "Cassey",
      lastName: "Hourican",
      email: "chourican1@sogou.com",
      role: "accountant",
      status: "inactive",
    },
    {
      id: "4863277164",
      firstName: "Fairfax",
      lastName: "Franken",
      email: "ffranken2@omniture.com",
      role: "admin",
      status: "active",
    },
    {
      id: "1296697444",
      firstName: "Benedict",
      lastName: "MacKaig",
      email: "bmackaig3@java.com",
      role: "admin",
      status: "active",
    },
    {
      id: "5183888183",
      firstName: "Ozzie",
      lastName: "Dominguez",
      email: "odominguez4@sohu.com",
      role: "admin",
      status: "active",
    },
    {
      id: "0053298853",
      firstName: "Kathryn",
      lastName: "Nielson",
      email: "knielson5@cdc.gov",
      role: "admin",
      status: "inactive",
    },
    {
      id: "2003051252",
      firstName: "Bourke",
      lastName: "Tunkin",
      email: "btunkin6@cloudflare.com",
      role: "accountant",
      status: "inactive",
    },
    {
      id: "3465481771",
      firstName: "Vita",
      lastName: "Ashford",
      email: "vashford7@mashable.com",
      role: "accountant",
      status: "inactive",
    },
    {
      id: "9878195163",
      firstName: "Nils",
      lastName: "Hazeley",
      email: "nhazeley8@tripadvisor.com",
      role: "accountant",
      status: "inactive",
    },
    {
      id: "0625141962",
      firstName: "Franklin",
      lastName: "Sayer",
      email: "fsayer9@mayoclinic.com",
      role: "doctor",
      status: "active",
    },
  ]);
};
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;
  return res.status(200).json({
    message: id,
  });
};
export default { getAllUsers, getUser };

/** source/server.ts */
import http from "http";
import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import routes, { route } from "./src/routes/users";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: ".env" });
const router: Express = express();

/** Logging */
router.use(morgan("dev"));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());
/** Allow Cross-Origin Resource Sharing */
router.use(cors());

/** Routes */
router.use("/", routes);

router.get("/", function (req: Request, res: Response) {
  res.status(200).json({ message: "Scratchpay assessment endpoint" });
});
/** Error handling */
router.use((req: Request, res: Response) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});
/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);

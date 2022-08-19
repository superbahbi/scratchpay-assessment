/** src/routes/users.ts */
import express from "express";
import controller from "../controllers/users";
const router = express.Router();

router.get("/users", controller.getAllUsers);

export = router;

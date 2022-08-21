/** src/routes/users.ts */
import express from "express";
import controller from "../controllers/users";
const router = express.Router();

router.get("/users", controller.getAllUsers);
router.post("/users", controller.addUser);
router.get("/users/:id", controller.getUser);
router.put("/users", controller.updateUser);
router.delete("/users/:id", controller.deleteUser);
export = router;

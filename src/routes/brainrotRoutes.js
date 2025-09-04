import express from "express";
import brainrotController from "../controllers/brainrotController.js";
const router = express.Router();
router.get("/", brainrotController.getAll);
router.post("/", brainrotController.create);
router.get("/:id", brainrotController.getById);
router.put("/:id", brainrotController.update);
router.delete("/:id", brainrotController.delete);
export default router;

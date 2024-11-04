import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import boardRouter from "./board.routes.js"
import taskRouter from './task.routes.js';

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/boards", boardRouter)
router.use("/tasks", taskRouter)

export default router
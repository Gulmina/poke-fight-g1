// routes/game.js
import { Router } from "express";
import { GameInfo, saveGame } from "../controllers/gameControllers.js";
const router = Router();

router.route(`/`).get(GameInfo);
router.route(`/`).post(saveGame);
export default router;

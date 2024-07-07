// routes/game.js
import { Router } from "express";
import {
  deleteSingleUser,
  GameInfo,
  saveGame,
  totallost,
  totalwinner,
} from "../controllers/gameControllers.js";
const router = Router();

router.route(`/`).get(GameInfo);
router.route(`/`).post(saveGame);
router.route(`/`).get(totalwinner);
router.route(`/`).get(totallost);
router.route(`/:id`).delete(deleteSingleUser);
export default router;

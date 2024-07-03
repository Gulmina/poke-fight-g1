import Games from "../models/games.js";

/* import { check, validationResult } from "express-validator"; */

/* export const getAll = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await UserModel.find(name && { name });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}; */

export const saveGame = async (req, res) => {
  /*  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
 */
  const { name, winner, loser, turns } = req.body;

  console.log(name, winner, loser, turns);
  try {
    const game = new Games(req.body);
    const gamesaved = await game.save();
    res.json(gamesaved);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const GameInfo = async (req, res) => {
  try {
    const games = await Games.find().sort({ date: -1 });
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

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
  const { name, winner, loser, games } = req.body;

  console.log(name, winner, loser, games);
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

///delete
export const deleteSingleUser = async (req, res) => {
  try {
    const game = await Games.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  winner: { type: Number, required: true },
  loser: { type: Number, required: true },
  games: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Games = mongoose.model("Games", gameSchema);

export default Games;

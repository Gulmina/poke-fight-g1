import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  winner: { type: String, required: true },
  loser: { type: String, required: true },
  turns: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Games = mongoose.model("Games", gameSchema);

export default Games;

import mongoose from "mongoose";

const pokemonschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  games: {
    type: Number,
    required: true,
    unique: true,
  },

  wins: {
    type: Number,
    required: true,
  },
  losses: {
    type: Number,
    required: true,
    default: false,
  },
});

const UserModel = mongoose.model("Pokemondata", pokemonschema);

export default UserModel;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//TODO: update this file with recipe details

const recipeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

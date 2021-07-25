const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

const Recipe = mongoose.model('User', recipeSchema);

module.exports = User;

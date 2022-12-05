const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Skills = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Responses: {
    type: Array,
    default: [],
  },
});

module.exports = User = mongoose.model("Skills", Skills);

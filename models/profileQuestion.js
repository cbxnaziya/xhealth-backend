const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String, // Base64 image string
  remark: Number,
});

const profileQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  meta: { type: String, required: true },
  options: [optionSchema],
  status: {type:Boolean},
});

const ProfileQuestion = mongoose.model("ProfileQuestion", profileQuestionSchema);

module.exports = ProfileQuestion;

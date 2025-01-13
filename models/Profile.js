const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  nickname: { type: String },
  religion: { type: String },
  mood: { type: String },
  emotion: { type: String },
  feeling: { type: String },
  goal: { type: String },
  experience: { type: String },
  trauma: { type: String },
  religious: { type: Boolean },
  // timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);

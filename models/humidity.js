const mongoose = require('mongoose');

const HumSchema = mongoose.Schema({
  value: Number,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('humidity', HumSchema);

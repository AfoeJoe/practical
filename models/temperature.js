const mongoose = require('mongoose');

const TempSchema = mongoose.Schema({
  value: Number,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('temperature', TempSchema);

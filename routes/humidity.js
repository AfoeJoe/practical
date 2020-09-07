const express = require('express');
const router = express.Router();
const Humidity = require('../models/humidity');
router.get('/', async (req, res) => {
  try {
    const hum = await Humidity.find();
    res.json(hum);
  } catch (error) {
    res.status(500).json({ message: error, isErr: true });
  }
  res.send('humidity route');
});
router.post('/', async (req, res) => {
  try {
    const humData = new Humidity({
      value: Math.floor(Math.random() * 100) + 1,
      Date: Date.now(),
    });
    const result = await humData.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error, isErr: true });
  }
});
module.exports = router;

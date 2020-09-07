const express = require('express');
const Temperature = require('../models/temperature');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const tem = await Temperature.find();
    res.status(200).json(tem);
  } catch (error) {
    res.status(500).json({ message: error, isErr: true });
  }
});
router.post('/', async (req, res) => {
  const tempFormed = new Temperature({
    value: Math.floor(Math.random() * 40) + 1,
    date: Date.now(),
  });
  try {
    const savedTemp = tempFormed.save();
    res.status(200).json(savedTemp);
  } catch (error) {
    res.status(500).json({ message: error, isErr: true });
  }
});
module.exports = router;

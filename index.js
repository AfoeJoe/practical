const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const Humidity = require('./models/humidity');
//MIDDLEWARE
app.use(bodyParser.json());
const tempRoutes = require('./routes/temperature');
app.use('/temperature', tempRoutes);

const humRoutes = require('./routes/humidity');
app.use('/humidity', humRoutes);

//DATABASE
mongoose.connect(
  process.env.DB,
  { useUnifiedTopology: true, seNewUrlParser: true },
  () => {
    console.log('connected');
  }
);
//ROUTES
app.get('/', async (req, res) => {
  let sensorLib = require('node-dht-sensor');
  sensorLib.initialize(22, 4);
  let interval = setInterval(() => {
    read();
  }, 2000);

  let read = () => {
    let readOut = sensorLib.read();
    console.log(
      `temperature is ${readOut.temperature.toFixed(
        2
      )} C. Humidity: ${readOut.humidity.toFixed(2)} %`
    );
  };

  try {
    const result = await Humidity.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
//SSERVER
app.listen(3000);

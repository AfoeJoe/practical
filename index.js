const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cron = require('node-cron');
require('dotenv/config');
const PORT = process.env.PORT||8080;
const Humidity = require('./models/humidity');
const Temperature = require('./models/temperature');
//MIDDLEWARE
app.use(bodyParser.json());
app.use('/', (req,res,next)=>{
let sensorLib = require('node-dht-sensor');
let func = ()=>{
sensorLib.read(11,4,(err,temperature,humidity)=>{
const temSchema = new Temperature({value:temperature});
const humSchema = new Humidity({value:humidity});
if(!err){
temSchema.save();humSchema.save();}
});
}
cron.schedule('* * * * *',func());
next();
});
const tempRoutes = require('./routes/temperature');
app.use('/temperature', tempRoutes);

const humRoutes = require('./routes/humidity');
app.use('/humidity', humRoutes);

//DATABASE
mongoose.connect(
  process.env.URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('connected');
  }
);
//ROUTES
app.get('/', async (req, res) => {

  try {
    const result = await Humidity.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
//SSERVER
app.listen(PORT,()=>{
console.log('App listening on port '+PORT);
});

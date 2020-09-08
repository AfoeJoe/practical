const express = require('express');
const app = express();

const server = require('http').createServer(app);



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
cron.schedule("* * * * *",func);
next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const tempRoutes = require('./routes/temperature');
app.use('/temperature', tempRoutes);

const humRoutes = require('./routes/humidity');
app.use('/humidity', humRoutes);

//DATABASE
mongoose.connect(
  process.env.URI,
  { useUnifiedTopology: true, useNewUrlParser: true }
);
//ROUTES
app.get('/', async (req, res) => {
let Gpio = require('onoff').Gpio;
let pushButton = new Gpio(21, 'in', 'both');



const getIt = () =>{io.on("connection",socket=>{socket.emit("touch",{"value":pushButton.readSync()});})
}

cron.schedule("* * * * *",getIt);

res.end();
 
});
//SSERVER

server.listen(PORT,()=>{
console.log('App listening on port '+PORT);
});

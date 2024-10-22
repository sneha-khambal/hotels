const mongoose = require('mongoose');
  require('dotenv').config();

// const mognodbUrl = process.env.MONGODB_LOCAL_URL;
const mognodbUrl = process.env.MONGODB_RMOTE_URL ;
mongoose.connect(mognodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true});

const db =  mongoose.connection;

db.on('connected',()=>{console.log('mongoDB server connected to NodeJs server')});
db.on('disconnected',()=>{console.log('mongoDB server disConnected  ')});
db.on('error',(err)=>{'error : '+err});

module.exports = db;

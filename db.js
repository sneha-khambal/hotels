const mongoose = require('mongoose');


const mognodbUrl = 'mongodb://127.0.0.1:27017/hotel';

mongoose.connect(mognodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true});

const db =  mongoose.connection;

db.on('connected',()=>{console.log('mongoDB server connected to NodeJs server')});
db.on('disconnected',()=>{console.log('mongoDB server disConnected  ')});
db.on('error',(err)=>{'error : '+err});

module.exports = db;

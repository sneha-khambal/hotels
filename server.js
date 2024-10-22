// console.log('server file is running.')
//  (()=>{ let a =12+7;  console.log(a) })();

// function callback(){
//     console.log('printing callbackback function')
// };

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log(result)
//     callback()
// };

// add(1,2,callback)

// // create file 
// var fs = require('fs')
// // get info about user or system
// var os = require('os')

// // ex
// var user = os.userInfo();
// console.log(user);


// fs.appendFile('greeting.txt','Hi'+user.username + `!\n `,()=>{console.log('getting file created.')})

// var notes = require('./notes')
// console.log('server.js using notes.js')
// var age = notes.age;
// var result = notes.addNumber(age+6,27);
// console.log(age)
// console.log('addon in add '+ result)

// var _ = require('lodash');

// var arr= ['sneha','sneha','11','11',10,10,27,'27'];
// var filter = _.uniq(arr);
// console.log(filter)


const express = require('express')
const app = express();
const db = require('./db')
const bodyParser = require('body-parser')
const personRouter = require('./routes/personRoutes')
const menuRouter = require('./routes/menuItemRoutes')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('welcome to Our Hotel, How can i help you?,We have list of Menu')
})

app.use('/person',personRouter)
app.use('/menu',menuRouter)

app.listen(3000,()=>{console.log('localhost running on 3000')})
var prompt  = require('prompt-sync')();


// // Day 1 :- Assigment 1 
// // Ans 1 
// var age = prompt('please enter your age.')
// if(age < 18 ){
//     prompt('you will get 20% off')
// }else if(age < 65 ){
//     prompt('you will get normal ticket price')
// }else{
//     prompt('you will get 30% off')
// }

// // ans 2:-
// function areaOfRactangle(){
// var length = prompt('give me lenth.');
// var width = prompt('give me width.');
// var area = length *width
// console.log('area of Ractangle' + area)
// }
// areaOfRactangle();

// ans 3:-
// let products =[ {
//     name:'Jeans',
//     price:1000,
//     inStock:false
// },
// {
//     name:'Jacket',
//     price:2000,
//     inStock:true
// },
// {
//     name:'T-shirt',
//     price:1500,
//     inStock:true
// }];

// for (let i = 0; i < products.length; i++) {
//     console.log('Product name '+ products[i].name)
//     console.log( 'Price '+ products[i].price)
//     console.log('InStock '+ products[i].inStock)
// }

// ans4
// let guestList = ['Mrunali','Nikita','Amala','Aniket','Sachin'];
// let guestName = prompt('Please Enter Your Name.');
// let checkList =  guestList.filter((listName)=>{ return listName.toLowerCase() == guestName.toLowerCase()})
// // console.log(checkList)
// if(checkList.length >0){
//     console.log('You are Welcome to Party.')
// }else{
//     console.log('Sorry your are not in our guestlist.')

// }


// ans5 JSON

let weatherForCastJson = [
    {
       "date":"12-10-2024",
       "temperature":"70 deg F",
       "condition":"Haze",
       "Humidity":"70%"
    },
    {
        "date":"13-10-2024",
        "temperature":"68 deg F",
        "condition":"Haze",
        "Humidity":"60%"
     },
     {
        "date":"14-10-2024",
        "temperature":"47 deg F",
        "condition":"Haze",
        "Humidity":"90%"
     },
     {
        "date":"15-10-2024",
        "temperature":"40 deg F",
        "condition":"Haze",
        "Humidity":"100%"
     }
];

for (let i = 0; i < weatherForCastJson.length; i++) {
    console.log(' date '+ weatherForCastJson[i].date)
    console.log('temperature '+ weatherForCastJson[i].temperature)
    console.log( 'condition '+ weatherForCastJson[i].condition)
    console.log('Humidity '+ weatherForCastJson[i].Humidity)
}
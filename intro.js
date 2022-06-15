const { application } = require("express");

const amount = 7

if(amount<10){
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`hey! it's my first node app!!`)
//console.log(__dirname)

//setInterval(()=>{
    //console.log('hello world');
//},1000)

//Modules - Encapsulated Code (only share minimum)

const names = require('./1-names')

const sayHI = (name) => {
    console.log(`Hello there ${name}`)
}

sayHI('Susan')
sayHI(names.Jeje)
sayHI(names.Victor)
console.log(names)
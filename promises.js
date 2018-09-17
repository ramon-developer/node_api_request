const request = require('request');
const hostname = 'http://pokeapi.co/api/v2/';
const path= 'generation/';
var number= '0';

function getJson(number){
    request(`${hostname}${path}${number}`,(err,res,body) => {
        console.log(`\nRetorna a ${number}º Geração de Pokemons:`);
        console.log(body);
    });
}

let promise1 = function() {
    number = '1';
    return new Promise(function(resolve,reject){
        resolve(getJson(number));
    });
};

let promise2 = function() {
    number = '2';
    return new Promise(function(resolve,reject){
        resolve(getJson(number));
    });
};

let promise3 = function() {
    number = '3';
    return new Promise(function(resolve,reject){
        resolve(getJson(number));
    });
};

Promise.all([promise1(),promise2(),promise3()])
    .then(function(){
        console.log('promises concluidas');
    }).catch((error) => {
            console.log('Uma das promises foi rejeitada');
            console.log(error);
    });

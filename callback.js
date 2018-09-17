const request = require('request');

const hostname = 'http://pokeapi.co/api/v2/';
const path= 'generation/';
const firstGen = '1';
const secondGen = '2';

function getGenerations(firstGen, secondGen) {
    firstGen = request(`${hostname}${path}${firstGen}`,(err,res,body) => {
        console.log(body);
    });
    secondGen = request(`${hostname}${path}${secondGen}`,(err,res,body) => {
        console.log(body);
    });
};

function organizar(){
    console.log("retorna 1º geração de pokemons: ");
    getGenerations(firstGen);
    getSecondGeneration(function(){
        console.log("retorna 2º geração de pokemons: ");
        getGenerations(secondGen);
    });
}

function getSecondGeneration(callback){
    setTimeout(callback, 3000);
}

organizar();

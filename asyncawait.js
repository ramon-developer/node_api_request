const request = require('request');

const URL_BASE = 'http://pokeapi.co/api/v2/';
const path= 'generation/';
const firstGen = '1';
const secondGen = '2';

function getJson(number){
    request(`${URL_BASE}${path}${number}`,(err,res,body) => {
        console.log(`\nRetorna a ${number}º Geração de Pokemons:`);
        console.log(body);
    });
}

function getFirstGen(firstGen) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(firstGen *2.5);
        }, 3000);
    });
}

function getSecGen(secondGen) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(secondGen *2.5);
        }, 3000);
    });
}

async function main(){
    try {
        if(await getFirstGen(firstGen)) {
            console.log(getJson('1'));
            if(await getSecGen(secondGen)) {
                console.log(getJson('2'));
            }
        }
    } catch(e){
        console.log('Erro no async/await',e);
    }
}

main();
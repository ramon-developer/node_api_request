const fetch = require('node-fetch');

const URL_BASE = 'http://pokeapi.co/api/v2/generation';

const asyncFunc = async () => {
    try {
        let data = await (await fetch(URL_BASE)).json();        
        return data;
    } catch(e){
        console.log('Erro no async/await',e);
    }
}

asyncFunc()
.then(data => console.log(data))
.catch(reason => console.log(reason.message))


const request = require('supertest')

test('', async () =>{

    //https://swapi.dev/api

    // /people/20

   const resposta = await request('https://swapi.dev/api').get('/people/9999');

// verificar se o status da requisisçao esta retornando falso com status 400

expect(resposta.status).toBe(404);
    
//verificar o valor do corpo vazio nao encontrado

expect(resposta.body.detail).toBe('Not found'); 

// podemos verificar tambem o corpo vazio como objeto 

expect(resposta.body).toMatchObject({
    detail: 'Not found'
});





});
const request = require('supertest')

test('Deve visualiazar informaçoes de cadastro, quando buscar por uma pessoa existente', async () =>{

    //https://swapi.dev/api

    // /planets/5

   const resposta = await request('https://swapi.dev/api').get('/planets/9999');

     // verificar se o status da requisisçao esta retornando falso com status 400

     expect(resposta.status).toBe(404);
    
     //verificar o valor do corpo vazio nao encontrado
 
     expect(resposta.body.detail).toBe('Not found'); 
     
     // podemos verificar tambem o corpo vazio como objeto 
 
     expect(resposta.body).toMatchObject({
         detail: 'Not found'
     });
 
    
 
     
 
  });
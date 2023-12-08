# Testes automatizados 
## Testes Unitários 
## Testes de Integração 

## JEST

- 1. Instalação do Jest 
~~~ 
$ npm install --save-dev jest  
~~~

- 2. Configuração do JEST 
- jest.config.json: 
~~~JavaScript
{
    "testEnvironment" : "node",
    "testMatch" : ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]
      "transform": {}
}
~~~
----OU----- 
- jest.config.js: 
~~~JavaScript
  module.exports = {
      testEnvironment: "node", 
      testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]
  }
~~~

- Script de testes em package.json:
~~~JSon
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage", //--passWithNoTests
~~~



- 3. Criar a pasta "test" e o arquivo mode.spec.js

- 4. Criar o primeiro teste

~~~javaScript
  /**
   *  Funções do JEST:
   * - describe   : Bloco de testes (tests Suites)
   * - it ou test : Declara um único teste unitário (tests cases)
   * - expect     : Validar resutados (result assertion) 
   */
      describe("Testes Exemplo", ()=>{
        test("dado 1 e 2, o resultado esperado eh 3", ()=>{
            expect(1 + 2).toEqual(3)
        })
    })

~~~

- 5. Testes de rotas de servidor 
- npm i --save-dev supertest 
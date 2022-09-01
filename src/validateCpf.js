const { validate } = require('gerador-validador-cpf')
require('dotenv').config()

const start = Date.now();

for (let i = 0; i < 10000; i++) {
  const result = validate(process.env.CPF);
}

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
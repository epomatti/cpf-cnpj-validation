const { cnpj } = require('cpf-cnpj-validator');
require('dotenv').config()

const start = Date.now();

for (let i = 0; i < 10000; i++) {
  const result = cnpj.isValid(process.env.CNPJ);
}

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
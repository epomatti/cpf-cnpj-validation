# CPF/CNPJ Validation

This uses local libraries to validate CPF and CNPJ entries.

Create the environment files:

```sh
touch .env
```

Add you parameters to the `.env` to be validated:

```sh
CPF='000.000.000-00'
CNPJ='00.000.000/0000-00'
```

Install dependencies and run the scripts:

```sh
yarn install

yarn run validate-cpf
yarn run validate-cnpj
```

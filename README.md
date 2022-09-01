# CPF/CNPJ Validation

This uses local libraries to validate CPF and CNPJ entries.

Create the environment files:

```sh
touch .env
```

Add you parameters to the `.env` to be validated:

```sh
CPF='....'
CNPJ='.....'
```

Install dependencies and run the scripts:

```sh
yarn install

yarn run validate-cpf
yarn run validate-cnpj
```

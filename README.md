
# Drink Faster

Project to be submitted for the position of Frontend developer at Faster. To test and evaluate my knowledge, I sought to develop and add the largest number of techniques and strategies within the proposed time.

![Logo](https://media.licdn.com/dms/image/C560BAQEIKSg9WeNOlQ/company-logo_200_200/0/1627569199028?e=2147483647&v=beta&t=ZytxzxM7FIL9wCW0W5CbUBd-ApbiId0LaVqrSD6ufVw)

### Obrigatórios
 - Criar documentação assertiva para a execução e apresentação do projeto no README; ✅
 - Utilizar typescript; ✅
 - Criar nome para aplicação; ✅
 - Tratamento básicos de erros da API; ✅
 - Fácil de buildar e executar a aplicação para testes ✅

### Opcionais
 - Tratamento para rotas que não existem; ✅
 - Escrever testes; ✅
 - Aplicação deve ser responsiva; ✅

### Diferenciais
 - Documentar decisões tomadas durante o desafio técnico. ✅
 - Paleta de cores única; ✅
 - UX agradável; ✅
 - Criar commits semânticos. ✅


## API Reference - [Thecocktaildb](https://www.thecocktaildb.com/api.php)

#### List category

```http
  GET https://thecocktaildb.com/api/json/v1/1/list.php?c=list
```

#### Filter category

```http
  GET https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}
```

#### Filter no alcoholic

```http
  GET https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
```


#### Get drink

```http
  GET https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
```

#### Search drink

```http
  GET https://thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}
```


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

Check the project repository on [Github](https://github.com/mathehm/drink-faster) for more information.

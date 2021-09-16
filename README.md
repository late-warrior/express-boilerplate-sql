# Production ready expressjs app

This was originally taken from the boilerplate [here](https://github.com/danielfsousa/express-rest-es2017-boilerplate) but has been modified extensively that a changelog alone is not sufficient. This assumes a pure API project - without having to worry about flows like 'Sign-up mail' or 'Sign in'

## Getting started

### Pre-requisites

- Make sure you have node16 or greater. This may work in lower versions but has not been tested there
- This connects to a Postgres server and a Kafka Broker. Make sure you have them downloaded and running on your system
- Copy .env.example into .env and modify properties accordingly
- Follow the [Prisma tutorial](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres/) to create database tables with Prisma Migrate and the
  schema here
- Run `yarn prisma:generate` to re-generate the prisma client based on `schema.prisma`

### Useful commands

- Development - `yarn dev` - does on-the-fly compilation of `src` folders. Uses nodemon for quick restarts
- Debugging - `yarn debug:node` - on the fly compilation of `src` without nodemon meant to be started from the debug console
- Deployment - `yarn start` - compiles `src` into `dist` and starts `pm2` from there
- Testing - `yarn test-only` - to run tests without coverage and `yarn test` for running with coverage

## Folder structure

- Keeps `src` and `test` separate to enable potentially different compilation setups
- Keeps `infra` and `domain` separate inside `src` to distinguish between plumbing code and core business logic
- Keeps `api` as a top level folder under `src` to isolate the HTTP API

## Configuration files

- `.husky` - pre-commit hooks
- `c8-coverage` - coverage information
- `dist` - javascript files compiled from typescript in `src`
- `docs` - generated API docs
- `runners` - useful scripts for running isolated functionality
- `.c8rc.json` - c8 configuration file
- `eslintrc.cjs` - eslint configuration
- `.mocharc.cjs` - mocha configuration
- `.prettierrc.json` - prettier configuration
- `.prettierignore` - files to ignore for prettier
- `nodemon.json` - nodemon configuration
- `schema.prisma` - prisma schema

## Authentication

- Verifies JWT auth tokens
- An endpoint to generate a token based on username and password needs to be done
- Use `https://jwt.io` to generate test tokens meanwhile for testing - the code snippet below can be sent from any browser console -

```javascript
const url = 'http://localhost:3000/users/auth/status/1';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.s1tM2n8aCq2lg7uUYKVB6ff7nnJewtGHhEM40ObQBF8';
const headers = { Authorization: `Bearer ${token}` };
const resp = await fetch(url, { headers });
await resp.json();
```

## Testing stack

Testing setup boilerplate taken from [node-typescript-esm-setup](https://github.com/late-warrior/nodejs-ts-test-setup)

## TODOs

- This works for only a couple of use-cases at the moment
- Add swagger integration
- Add back integration tests for the API
- Validation for all payload inputs

## Domain

- This chooses a blogging application domain that has a concept of an author, blog, posts, comments etc
- We choose this domain since Prisma examples are easier to copy-paste as they use the same domain
- This app aims to demonstrate different types of roles -admin, blogger as well as routes that are accessible to a few roles

## SSL

- For local development, you can generate an SSL key like below -

```
$> openssl req -newkey rsa:4096             -x509             -sha256             -days 3650             -nodes             -out example.crt             -keyout example.key             -subj "/C=IN/ST=TN/L=VNR/O=late-warrior/OU=IT/CN=www.rusticwork.in"
```

# Contributions

Contributions and improvements welcome. Please log an issue with your proposal and changes

# Other boilerplates

Some other useful references applications I discovered while writing this -

- [Real world grading app](https://github.com/2color/real-world-grading-app/) - Stack built with hapi.js and Prisma

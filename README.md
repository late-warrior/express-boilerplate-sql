# Production ready expressjs app

This was originally taken from the boilerplate [here](https://github.com/danielfsousa/express-rest-es2017-boilerplate) but has been modified extensively that a changelog alone is not sufficient

## Useful commands

- Development - `yarn dev` - does on-the-fly compilation of `src` folders. Uses nodemon for quick restarts
- Deployment - `yarn start` - compiles `src` into `dist` and starts `pm2` from there
- Testing - `yarn test-only` - to run tests without coverage and `yarn test` for running with coverage

## ORM

- For any complex data retrieval logic, it is best to use an ORM. We use [Prisma](https://www.prisma.io/) in this project
- See `schema.prisma` for how the database is mapped
- Run `yarn prisma:generate` to re-generate the prisma client based on `schema.prisma`

## Folder organization

- Keeps `src` and `test` separate to enable potentially different compilation setups
- Keeps `infra` and `domain` separate inside `src` to distinguish between plumbing code and core business logic
- Keeps `api` as a top level folder under `src` to house the HTTP API

## Testing stack

Testing setup boilerplate taken from [node-typescript-esm-setup](https://github.com/late-warrior/nodejs-ts-test-setup)

## Authentication

- Supports JWT

## TODOs

- This is barely working at this point - need to enable all CRUD operations
- Make use of passport and passport-jwt to do authentication - the setup can be seen in the [original boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- Check the places where we have @ts-ignore and fix them
- Fix all lint issues
- Every call is making a call to `/favicon.ico as well - needs to be fixed or served from a static location - right now it errors out
- Explore and change out apidoc to swagger (openapi) if that is easy

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

## Assumptions

This assumes a pure API project - without having to worry about flows like 'Sign-up mail' or 'Sign in'

## Domain

- app_user - roles - customer, admin
- routes - authorized, unauth, admin-only
- blog application - author, blog, posts, comments etc
- why this domain - prisma examples easy to copy-pasted and start with

- 2 schemas present - postgres and sqlserver

- Download postgres
- Start psql (sudo -u postgres psql)
- Create a new role and database
- CREATE ROLE blog_rw NOSUPERUSER CREATEDB NOCREATEROLE NOINHERIT LOGIN PASSWORD 'password';
- create database blog_db;
- psql -U blog_rw -h localhost -d blog_db
- GRANT ALL PRIVILEGES ON DATABASE blog_db TO blog_rw;

# Getting started

- copy .env.example into .env and modify
- Follow the [tutorial](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres/) to create database tables with Prisma Migrate
-

```
Environment variables loaded from .env
Prisma schema loaded from schema.prisma
Datasource "db": PostgreSQL database "blog_db", schema "public" at "localhost:5432"

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20210903123817_init/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (2.30.0) to ./node_modules/@prisma/client in 289ms
```

-

### Debugging

- Run `yarn debug:dev` - this runs the development instance without nodemon and so is easier to debug

### Use jwt.io to generate sample jwt tokens

```
const url = 'http://localhost:3000/users/auth/status/1';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.s1tM2n8aCq2lg7uUYKVB6ff7nnJewtGHhEM40ObQBF8';
const headers = {Authorization: `Bearer ${token}`}
const resp = await fetch(url, {headers})
await resp.json()
```

- Right now demonstrates two routes -

* Authenticated blogger route
* Unauthenticated route
* Authenticated admin route

* TODO - a route to issue JWT tokens

To Fix -

- openapi
- add test

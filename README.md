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

<<<<<<< HEAD
=======
## Authentication

- Supports JWT

>>>>>>> d42c06c (first commit)
## TODOs

- This is barely working at this point - need to enable all CRUD operations
- Make use of passport and passport-jwt to do authentication - the setup can be seen in the [original boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- Check the places where we have @ts-ignore and fix them
- Fix all lint issues
- Every call is making a call to `/favicon.ico as well - needs to be fixed or served from a static location - right now it errors out
- Explore and change out apidoc to swagger (openapi) if that is easy
<<<<<<< HEAD
=======

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
>>>>>>> d42c06c (first commit)

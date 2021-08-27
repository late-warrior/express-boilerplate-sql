# Production ready expressjs app

This was originally taken from the boilerplate [here](https://github.com/danielfsousa/express-rest-es2017-boilerplate) but has been modified extensively that a changelog alone is not sufficient

## Useful commands

- Development - `yarn dev` - does on-the-fly compilation of `src` folders. Uses nodemon for quick restarts
- Deployment - `yarn start` - compiles `src` into `dist` and starts `pm2` from there
- Testing - `yarn test-only` - to run tests without coverage and `yarn test` for running with coverage

## Folder organization

- Keeps `src` and `test` separate to enable potentially different compilation setups
- Keeps `infra` and `domain` separate inside `src` to distinguish between plumbing code and core business logic
- Keeps `api` as a top level folder under `src` to house the HTTP API

## Testing stack

Testing setup boilerplate taken from [node-typescript-esm-setup](https://github.com/late-warrior/nodejs-ts-test-setup)

## TODOs

- This is barely working at this point - need to enable all CRUD operations
- Make use of passport and passport-jwt to do authentication - the setup can be seen in the [original boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- Check the places where we have @ts-ignore and fix them
- Fix all lint issues
- Every call is making a call to `/favicon.ico as well - needs to be fixed or served from a static location - right now it errors out

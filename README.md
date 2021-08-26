# Production ready expressjs app

This was originally taken from the boilerplate [here](https://github.com/danielfsousa/express-rest-es2017-boilerplate) but has been modified extensively that a changelog alone is not sufficient

## Testing stack

Testing setup boilerplate taken from [node-typescript-esm-setup](https://github.com/late-warrior/nodejs-ts-test-setup)

## TODOs

- This is barely working at this point - need to enable all CRUD operations
- Make use of passport and passport-jwt to do authentication - the setup can be seen in the [original boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- Check the places where we have @ts-ignore and fix them
- Fix all lint issues
- Check the test setup works
- Every call is making a call to `/favicon.ico as well - needs to be fixed or served from a static location - right now it errors out

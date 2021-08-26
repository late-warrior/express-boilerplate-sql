# Production ready expressjs app

Modified from the boilerplate [here](https://github.com/danielfsousa/express-rest-boilerplate). Major changes -

**Added**

- Use typescript
- Use prettier
- Use eslint-config-unicorn - for some enforcing some generally good practices

**Removed**

- Docker
- coveralls
- travis
- passportjs, user authentication, jwt

**Changed**

- Connect to SQL Server (SQLLite in development) instead of MongoDB
- ESM instead of CJS (conversion done through the cjs-to-es6 CLI)

### Code organization

This repo organizes code according to DDD principles - it uses the CQRS pattern to separate commands and queries (or use different models).
There is an explicit domain layer and an infrastructure layer. The infrastructure layer should not need to use the domain layer.

#### Domain

The domain here models a simple ecommerce application. Unauthorized users can search among various items. They can choose an item, add it to cart.
For placing an order, they need to be authenticated.

#### Install dependencies:

```bash
yarn
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

- Hit http://localhost:3000/v1/status to verify if it is up - the v1 can vary based on the API version

## Running in Production

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with coverage
yarn test

Testing setup boilerplate taken from [node-typescript-esm-setup](https://github.com/late-warrior/nodejs-ts-test-setup)

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```

## Deploy

- Supports deployment through docker
- Uses nginx as a reverse proxy to handle high load

## Debugging

- Bump up the log levels to get detailed logging of what is going on
- Follow the tutorial to help you debug the lifecycle of a request

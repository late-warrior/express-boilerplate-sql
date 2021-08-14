# Production ready expressjs app

Modified from the boilerplate [here](). Major changes -

**Added**

- Use typescript
- Use prettier
- Use eslint-config-unicorn

**Removed**

- Docker
- coveralls
- travis

**Changed**

- Connect to SQL Server instead of MongoDB
- ESM instead of CJS (conversion done through the cjs-to-es6 CLI)

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
# run all tests with Mocha
yarn test

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

Custom deployment setup

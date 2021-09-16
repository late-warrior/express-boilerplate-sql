import dotEnvSafe from 'dotenv-safe';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// import .env variables
dotEnvSafe.config({
  path: path.join(__dirname, '../../../.env'),
  sample: path.join(__dirname, '../../../.env.example'),
  allowEmptyValues: true,
});

export const CONFIG = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  emailTokenExpirationMinutes: Number.parseFloat(
    process.env.EMAIL_TOKEN_EXPIRATION_MINUTES
  ),
  kafkaBrokers: process.env.KAFKA_BROKERS.split(','),
  sqlServer: {},
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  emailConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },
  sslCrt: process.env.SSL_CRT,
  sslKey: process.env.SSL_KEY,
};

export const APP_CONSTANTS = {
  APP_NAME: 'express-boilerplate',
};

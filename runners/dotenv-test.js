import dotEnvSafe from 'dotenv-safe';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// import .env variables
dotEnvSafe.config({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example'),
  allowEmptyValues: true,
});

console.log(process.env.KAFKA_BROKERS.split(','));
console.log(typeof(process.env.KAFKA_BROKERS));

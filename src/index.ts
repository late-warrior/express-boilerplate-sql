import fs from 'fs';
import https from 'https';
import app from './infra/config/express';
import logger from './infra/config/logger';
import { CONFIG } from './infra/config/vars';

const { port, env, sslCrt, sslKey } = CONFIG;
const certificate = fs.readFileSync(sslCrt, 'utf8');
const privateKey = fs.readFileSync(sslKey, 'utf8');

const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

// listen to requests
httpsServer.listen(port, () =>
  logger.info(`server started on port ${port} (${env})`)
);

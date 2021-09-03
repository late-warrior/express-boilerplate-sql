import app from './infra/config/express';
import logger from './infra/config/logger';
import { CONFIG } from './infra/config/vars';

const { port, env } = CONFIG;

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 */
export default app;

import app from './infra/config/express';
import logger from './infra/config/logger';
import { env, port } from './infra/config/vars';

// CREATE  user icp_read_write with password = 'Icp@read123'

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 */
export default app;

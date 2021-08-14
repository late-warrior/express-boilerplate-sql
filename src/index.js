import { port, env } from './config/vars';
import logger from './config/logger';
import app from './config/express';
// const sqlServer = require('./config/sqlserver');

// CREATE  user icp_read_write with password = 'Icp@read123'

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
export default app;

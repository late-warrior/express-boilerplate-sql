const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');
// const sqlServer = require('./config/sqlserver');

//CREATE  user icp_read_write with password = 'Icp@read123'

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;

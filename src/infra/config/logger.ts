import path from 'path';
import winston from 'winston';

const LOG_DIR = 'logs';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: path.join(LOG_DIR, 'error.log'),
      level: 'error',
    }),
    new winston.transports.File({
      filename: path.join(LOG_DIR, 'combined.log'),
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

logger.stream = {
  // @ts-ignore
  write: (message) => {
    logger.info(message.trim());
  },
};

export default logger;

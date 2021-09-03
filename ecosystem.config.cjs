module.exports = {
  // This file is used by pm2
  apps: [
    {
      name: 'express-app',
      script: 'node --experimental-specifier-resolution=node ./dist/index.js',
    },
  ],
};

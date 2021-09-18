module.exports = {
  // This file is used by pm2
  apps: [
    {
      name: 'express-app',
      script: 'node --experimental-specifier-resolution=node ./dist/index.js',
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'express-app-cluster',
      script: 'node --experimental-specifier-resolution=node ./dist/index.js',
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
      instances: 2,
      exec_mode: 'cluster',
    },
  ],
};

module.exports = {
  apps: [
    {
      name: 'express-app',
      script: 'node --experimental-specifier-resolution=node ./dist/index.js',
    },
  ],
};

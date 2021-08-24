module.exports = {
  timeout: 20000,
  require: 'ts-node/register',
  loader: 'ts-node/esm',
  extensions: ['ts', 'js'],
  'watch-files': ['src'],
};

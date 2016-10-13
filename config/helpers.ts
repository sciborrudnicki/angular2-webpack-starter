/**
 * @author: @AngularClass
 */

export const path = require('path');

// Helper functions
export const ROOT = path.resolve(__dirname, '..');

export const hasProcessFlag = function(flag) {
  return process.argv.join('').indexOf(flag) > -1;
};

export const shouldBeHMR = () => this.hasProcessFlag('hot');

export const init = function({ env }) {
  process.env.ENV = process.env.NODE_ENV = env;
  process.env.HOST = process.env.HOST || 'localhost';
  process.env.PORT = process.env.PORT || 3000;
};

export const isProd = () => this.isEnv('production');
export const isDev = () => this.isEnv('development');

export const isEnv = (env) => process.env.ENV || process.env.NODE_ENV === env;

export const isWebpackDevServer = function() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
};

export const root = function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
};

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.pro.config');

let config = process.env.NODE_ENV === 'development' ? devConfig : proConfig;

console.log('env:', process.env.NODE_ENV )

module.exports = merge(baseConfig, config);
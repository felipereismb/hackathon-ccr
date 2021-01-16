const path = require('path');
const withFonts = require('nextjs-fonts');
// eslint-disable-next-line
const webpack = require('webpack');
require('dotenv').config();

module.exports = withFonts({
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    config.resolve.modules.push(path.resolve('.'));
    return config;
  },
});

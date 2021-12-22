/* eslint-disable */
const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    "jsx",
    "cjs",
  ],
};

module.exports = { ...exports };

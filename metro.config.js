const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const baseConfig = {
  resetCache: true,
};

const defaultConfig = getDefaultConfig(__dirname);

// Merge your custom config with the default config
const mergedConfig = mergeConfig(defaultConfig, baseConfig);

// Wrap the merged config with Reanimated's Metro configuration
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);

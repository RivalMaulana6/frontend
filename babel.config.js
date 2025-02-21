module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blocklist: [],
        allowlist: [],
        safe: false,
        allowUndefined: true,
      }],
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
      }],
      'react-native-reanimated/plugin'
    ],
  };
};

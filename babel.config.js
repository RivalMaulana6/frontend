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
          '@config': './src/config',
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
      }],
      'react-native-reanimated/plugin', // Perbaikan posisi plugin ini
    ],
  };
};

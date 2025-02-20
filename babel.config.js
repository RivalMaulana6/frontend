module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // For loading environment variables
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: [], // Leave empty if no variables should be excluded
          allowlist: [], // Leave empty if no specific variables are allowed
          safe: false,
          allowUndefined: true,
        },
      ],
      // For module aliasing
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@navigation': './src/navigation',
          },
        },
      ],
    ],
  };
};

module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env',
            path: '.env',
            blocklist: [], // gunakan array kosong jika tidak ada variabel yang ingin dikecualikan
            allowlist: [], // gunakan array kosong jika tidak ada variabel khusus yang diizinkan
            safe: false,
            allowUndefined: true,
          },
        ],
      ],
    };
  };
  
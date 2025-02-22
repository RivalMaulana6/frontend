import "dotenv/config"; // Untuk membaca .env

export default {
  expo: {
    name: "Light Stick Shop",
    slug: "frontend",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "light-stick-shop", // Untuk deep linking (opsional)
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    owner: "rivalmaulans", // Tambahkan owner agar tidak error
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.rivalmaulans.lightstickshop", // Wajib unik & tidak berubah setelah build pertama!
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL || "https://lightstickshop-backend-production-caef.up.railway.app",
      eas: {
        projectId: "be0acb96-91b2-4e72-936b-fb7dbd4e9fc4",
      },
    },
  },
};

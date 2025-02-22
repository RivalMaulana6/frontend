import "dotenv/config"; // Untuk membaca .env

export default {
  expo: {
    name: "frontend",
    slug: "frontend",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "light-stick-shop",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    owner: "rivalmaulans", // Tambahkan ini agar tidak error saat `eas build`
    ios: {
      supportsTablet: true,
    },
    android: {
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

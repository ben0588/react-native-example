import { ExpoConfig, ConfigContext } from "expo/config";

const ENV = process.env.APP_ENV || "development"; // 預設為開發環境

const config = {
  development: {
    name: "My App (DEV)",
    slug: "my-app-dev",
    extra: {
      apiUrl: "https://dev.api.com",
    },
  },
  production: {
    name: "My App",
    slug: "my-app",
    extra: {
      apiUrl: "https://api.com",
    },
  },
};

export default ({ config: defaultConfig }: ConfigContext): ExpoConfig => ({
  ...defaultConfig,
  ...config[ENV],
});

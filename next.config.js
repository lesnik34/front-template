module.exports = {
  reactStrictMode: true,
  env: require(`./config/${process.env.ENV_MODE}.json`),
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
};

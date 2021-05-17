// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");
process.env.VUE_APP_LICENSE = packageJson.license;
process.env.VUE_APP_VERSION = packageJson.version;

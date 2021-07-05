// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");
process.env.VUE_APP_LICENSE = "GNU Affero General Public License version 3";
process.env.VUE_APP_VERSION = packageJson.version;

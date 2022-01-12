const { baseConfig } = require('../../base.config')
const { webpack } = require('../../webpack.config')
const withTM = require("next-transpile-modules")(["@turborepo-test/components"])

module.exports = withTM({
    ...baseConfig,
    publicRuntimeConfig: {
        ...baseConfig.publicRuntimeConfig,
    },
    webpack,
})

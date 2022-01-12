const { baseConfig } = require('../../base.config')
const { webpack } = require('../../webpack.config')
const withTM = require("next-transpile-modules")(["@turborepo-test/components"])

console.log('process.env.TEST_VALUE: ', process.env.TEST_VALUE)

module.exports = withTM({
    ...baseConfig,
    publicRuntimeConfig: {
        ...baseConfig.publicRuntimeConfig,
    },
    webpack,
})

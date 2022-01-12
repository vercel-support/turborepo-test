const { baseConfig } = require('../../base.config')
const { webpack } = require('../../webpack.config')

module.exports = {
    ...baseConfig,
    webpack,
}

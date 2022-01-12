module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv|mov)$/,
            use: [
                {
                    loader: require.resolve('file-loader'),
                    options: {
                        publicPath: '/_next/static/videos/',
                        outputPath: `${isServer ? '../' : ''}static/videos/`,
                        name: '[name]-[hash].[ext]',
                    },
                },
            ],
        })

        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/,
            use: [
                {
                    loader: require.resolve('file-loader'),
                    options: {
                        publicPath: '/_next/static/audio/',
                        outputPath: `${isServer ? '../' : ''}static/audio/`,
                        name: '[name]-[hash].[ext]',
                    },
                },
            ],
        })

        return config
    },
};

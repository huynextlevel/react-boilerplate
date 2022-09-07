const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "assert": require.resolve("assert"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.ignoreWarnings = [/Failed to parse source map/];
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]);
    return config;
}
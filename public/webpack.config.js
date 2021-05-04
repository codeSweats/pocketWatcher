const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
        app: './index.js'
    },
    output: {
        path: _dirname + '/dist',
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            name: 'Pocket Watcher',
            short_name: 'Pocket Watcher',
            description: 'An application that allows you to manage your account ledger even if offline.',
            background_color: '#01579b',
            theme_color: '#ffffff',
            'theme-color': '#ffffff',
            start_url: '/',
            icons: [
                {
                    src: path.resolve('public/icons/icon-512x512.png'),
                    sizes: [192, 512],
                    destination: path.join('assets', 'icons'),
                },
            ],
        }),
    ],
};


module.exports = config;
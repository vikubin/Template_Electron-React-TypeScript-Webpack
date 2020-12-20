const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {

        // Development mode "production" | "development" | "none"
        // https://webpack.js.org/configuration/mode/
        mode: 'development',

        // Location of the entry point https://webpack.js.org/configuration/entry-context/#entry
        entry: './src/electron.ts',

        // Specifies which environment to target when producing bundle.
        target: 'electron-main',
        module: {
            rules: [{

                // Match all files that end with .ts
                test: /\.ts$/,
                include: /src/, // include files in src
                use: [{ loader: 'ts-loader' }]
            }]
        },

        output: {

            // Output directory
            path: __dirname + '/dist',

            // Bundle filename.
            filename: 'electron.js'
        }
    },
    {
        mode: 'development',
        entry: './src/react.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',

        module: { rules: [{
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }] },

        output: {
            path: __dirname + '/dist',
            filename: 'react.js'
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];
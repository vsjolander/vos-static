const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/js/index.js'
    },
    devServer: {
        contentBase: './public-html'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['public-html']),
        new HtmlWebpackPlugin({
            title: 'Restaurang Folkparken',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=yes'}
        }),
        new FaviconsWebpackPlugin('./favicon.png')
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public-html')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(png|svg|jpg|gif|eps)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    }
};

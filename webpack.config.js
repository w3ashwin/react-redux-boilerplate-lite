const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'app/assets');
const package = require('./package.json');
const appHtmlTitle = 'Webpack Boilerplate';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        vendor: Object.keys(package.dependencies),
        bundle: path.join(dirApp, 'index.jsx')
    },
	output: {
		publicPath: "/"
	},
	resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    optimization: {
        splitChunks: {
            name: false,
            chunks: "async",
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.html'),
            filename: 'index.html',
            favicon: 'assets/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
            hash: true,
            title: "Hello World",
            'files': {
                'css': ['[name].bundle.css'],
                'js': ['[name].bundle.js'],
                'chunks': {
                    'head': {
                        'entry': '',
                        'css': '[name].bundle.css'
                    },
                    'main': {
                        'entry': '[name].bundle.js',
                        'css': []
                    },
                }
            }
        }),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),

        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            disable: IS_DEV,
            allChunks: true,
            ignoreOrder: false
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.Tether": 'tether',
            Tether: 'tether'
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /(node_modules)/
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            // {
            //     test: /\.scss/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: IS_DEV
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: IS_DEV,
            //                 includePaths: [dirAssets]
            //             }
            //         }
            //     ]
            // },

            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },

            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings
            //     }, {
            //         loader: "css-loader" // translates CSS into CommonJS
            //     }, {
            //         loader: "sass-loader" // compiles Sass to CSS
            //     }]
            // },
            // IMAGES
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                gifsicle: {
                                    interlaced: true
                                },
                                mozjpeg: {
                                    progressive: true
                                },
                                optipng: {
                                    optimizationLevel: 7
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                }
                            }
                        },
                    },
                ],
            },

            //FONTS
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
                use: 'file-loader',
            },

            //Static HTML
            {
                test: /\.html$/,
                use: 'html-loader'
            },

            //JSON
            {
                test: /\.json$/,
                use: 'json-loader'
            },

            //VIDEOS
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    },
                },
            },
        ]
    }
};

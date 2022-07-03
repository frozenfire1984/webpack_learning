const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev*/
const isHot = process.env.HOT_ENV === "hot_enabled"
const isStat = process.env.STAT_ENV === "stat_enabled"
const isEL = process.env.EL_ENV === "el_enabled"

console.log("process.env.NODE_ENV:")
console.log(process.env.NODE_ENV)





//const config

module.exports = (env, argv) => {
	console.log("env")
	console.log(env)
	
	console.log("argv")
	console.log(argv)
	
	const isDev = argv.mode === "development"
	const isProd = argv.mode === "production"
	
	if (!isStat) {
		console.log("------------------------------------")
		console.log("------------------------------------")
		console.log("is mode: " + argv.mode)
		console.log("is hot mode: " + process.env.HOT_ENV)
		console.log("is eslint enabled: " + process.env.EL_ENV)
		console.log("------------------------------------")
		console.log("------------------------------------")
	}
	
	const entry = {
		// main: ['@babel/polyfill', './index.js'],
		main: ['./index.js'],
		//main: ['./index_ts.ts'],
		//main: ['./index-react.jsx'],
		analytics: './analytics.js'
	}
	
	const entry_hot = {
		//main: ['@babel/polyfill', './index.js'],
		main: ['./index.js'],
		//main: ['./index-react.jsx'],
	}
	
	const optimization = () => {
		const config = {
			splitChunks: {
				chunks: isDev ? "async" : "all"
				//chunks: 'all'
			}
		}
		if (isProd) {
			config.minimize = true
			config.minimizer = [
				new CssMinimizerPlugin(),
				new TerserWebpackPlugin()
			]
		}
		return config
	}
	
	const filename = (ext) => isDev ? `[name].${ext}` : `[name]_bundle.${ext}`
	const noop = () => {};
	
	return {
		mode: isDev ? "development" : "production",
		context: path.resolve(__dirname, 'src'),
		entry: isHot ? entry_hot : entry,
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: filename('js'),
		},
		resolve: {
			extensions: ['.js', 'json', 'ts'],
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@models': path.resolve(__dirname, 'src/models'),
				'@assets': path.resolve(__dirname, 'src/assets')
			}
		},
		optimization: optimization(),
		devServer: {
			port: 4200,
			//hot: isDev
			//watchContentBase: true,
		},
		devtool: isDev ? 'source-map' : 'eval',
		plugins: [
			new HTMLWebpackPlugin({
				template: "./index_old.html",
				inject: "body",
				title: "Webpack App",
				minify: isProd,
				hash: true,
				xhtml: true,
				
			}),
			new CleanWebpackPlugin(),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'src/assets/favicon.ico'),
						to: path.resolve(__dirname, 'dist')
					}
				]
			}),
			new MiniCssExtractPlugin({
				filename: filename('css'),
			}),
			isEL ? new ESLintPlugin({
				extensions: ['js', 'jsx', 'ts'],
				exclude: [
					'/node_modules/',
					
				],
			}) : noop,
			isProd && isStat ? new BundleAnalyzerPlugin() : noop
		],
		module: {
			rules: [
				{
					test: /\.css$/,
					exclude: /\.lazy\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
					]
				},
				{
					test: /\.lazy\.css$/,
					use: [
						{
							loader: "style-loader",
							options: {
								injectType: 'lazyStyleTag'
							}
						},
						'css-loader',
					]
				},
				{
					test: /\.s[ca]ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "sass-loader",
							options: {
								sourceMap: true,
								sassOptions: {
									outputStyle: "compressed",
								},
							}
						}
					]
				},
				{
					test: /\.less$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "less-loader",
							options: {
								sourceMap: true,
							}
						}
					],
				},
				{
					test: /\.(png|jpg|svg|gif)$/,
					type: 'asset/resource'
				},
				{
					test: /\.(ttf|woff|woff2|eot)$/,
					type: 'asset/resource'
				},
				{
					test: /\.xml$/,
					use: ['xml-loader']
				},
				{
					test: /\.csv$/,
					use: ['csv-loader']
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									'@babel/preset-env'
								],
								plugins: [
									'@babel/plugin-proposal-do-expressions'
								]
							}
						},
						//'eslint-loader'
					]
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-typescript'
							]
						}
					}
				},
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							],
						}
					}
				}
				/*{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: 'ts-loader',
				}*/
			]
		}
	}
}
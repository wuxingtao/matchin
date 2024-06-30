/* eslint-disable */
'use strict'
const resolve = dir => require('path').join(__dirname, dir)

// eslint-disable-next-line import/no-commonjs
module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.less','.scss'],
		alias: {
			'@': resolve('./src'),
			'@views': resolve('./src/views'),
			'@assets': resolve('./src/assets'),
			'@https': resolve('./src/https'),
			'@utils': resolve('./src/utils'),
			'@pages': resolve('./src/pages'),
			'@store': resolve('./src/store'),
			'@service': resolve('./src/service'),
			'@components': resolve('./src/components'),
		}
	},
}

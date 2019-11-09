module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/portfolio2019/'
		: '/',
	configureWebpack: {
		devServer: {
			host: require('ip').address()
		}
	}
};

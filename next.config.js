/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		APP_URL: 'http://localhost:3000',
		APP_ENV: 'development',
		APP_SERVER_URL: 'http://localhost:3333/api',
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://loacalhost:3333/api/:path*',
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.pinimg.com',
			},
		],
	},
}

module.exports = nextConfig

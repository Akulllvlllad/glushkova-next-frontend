import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />

				<link
					href='https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap'
					rel='stylesheet'
				></link>

				<link
					href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap'
					rel='stylesheet'
				></link>

				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap'
					rel='stylesheet'
				></link>

				<link
					href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap'
					rel='stylesheet'
				></link>
				<meta name='theme-color' content='#CD313A' />

				<meta name='msapplication-navbutton-color' content='#CD313A' />

				<meta name='apple-mobile-web-app-status-bar-style' content='#CD313A' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

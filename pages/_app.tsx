import type { AppProps } from 'next/app'
import '../app/assets/scss/global.scss'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

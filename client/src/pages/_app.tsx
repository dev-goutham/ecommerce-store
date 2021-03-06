import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import '../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

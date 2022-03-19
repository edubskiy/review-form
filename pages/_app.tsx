import '../styles/globals.css'
import '../styles/all.css'
import '../components/review-form.styles.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

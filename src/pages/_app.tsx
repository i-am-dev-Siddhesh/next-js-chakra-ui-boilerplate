import '../styles/globals.css'
import type { AppProps } from 'next/app'

function APP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default APP

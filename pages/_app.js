import 'dotenv/config'
import { SWRConfig } from 'swr'
import fetchJSON from 'library/fetchJSON'
import '../styles/globals.css'

function MyHistoryToday ({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJSON,
        onError: (err) => {
          console.error(err)
        }
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyHistoryToday

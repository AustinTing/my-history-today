import { SWRConfig } from 'swr'
import '../styles/globals.css'

function MyHistoryToday ({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
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

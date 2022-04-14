import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout ({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>One This Day...</title>
        <meta name='description' content='My History Today' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/AustinTing/my-history-today'
        >
          Made with
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-1 mr-1 text-rose-600 fill-current' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
          </svg>
          by Austin Ting
        </a>
      </footer>
    </div>
  )
}

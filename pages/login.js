import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Login () {
  return (
    <div className={styles.container}>
      <Head>
        <title>One This Day...</title>
        <meta name='description' content='My History Today' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className={styles.main}>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block'>On this day</span>
            <span className='block text-pink-500'>Meet Your History</span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700'
              >
                Login
              </a>
            </div>

          </div>
        </div>
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

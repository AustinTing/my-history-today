import useUser from 'library/useUser'
import Layout from 'components/Layout'

export default function Login () {
  // here we just check if user is already logged in and redirect to profile
  useUser({
    redirectTo: '/',
    redirectIfFound: true
  })

  return (
    <Layout>
      <div className='flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center '>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>On this day</span>
          <span className='block text-pink-500'>Meet Your History</span>
        </h2>
        <button className='gp-button raised' id='login'>
          Connect to Google Photos
        </button>
      </div>
    </Layout>
  )
}

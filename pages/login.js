import { useRouter } from 'next/router'
// import useUser from 'library/useUser'
import Layout from 'components/Layout'
import LoginButton from 'components/LoginButton'

export default function Login () {
  // here we just check if user is already logged in and redirect to profile
  // useUser({
  //   redirectTo: '/',
  //   redirectIfFound: true
  // })
  const router = useRouter()
  const routetToGoogleAuth = (e) => {
    e.preventDefault()
    // mutateUser(
    //   await fetchJSON('/api/logout', { method: 'POST' }),
    //   false
    // )
    console.log('pages/login: LoginButton onClick')
    router.push('api/auth/google')
  }
  return (
    <Layout>
      <div className='mx-auto max-w-7xl flex-col py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8 '>
        <h2 className='mb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span
            className='block'
            onClick={() => console.log('pages/login: LoginButton onClick')}
          >
            On this day
          </span>
          <span className='block text-pink-500'>Meet Your History</span>
        </h2>
        <LoginButton onPress={routetToGoogleAuth} />
      </div>
    </Layout>
  )
}

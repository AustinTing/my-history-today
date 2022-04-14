import { useRouter } from 'next/router'
import fetchJSON from 'library/fetchJSON'
import useUser from 'library/useUser'
import Layout from 'components/Layout'

export default function Home () {
  const { user, mutateUser } = useUser({
    redirectTo: '/login'
  })
  const router = useRouter()

  return (
    <Layout>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>
            {JSON.stringify(user)}
          </span>
        </h2>
      </div>
      <a
        href='/api/logout'
        onClick={async (e) => {
          e.preventDefault()
          mutateUser(
            await fetchJSON('/api/logout', { method: 'POST' }),
            false
          )
          router.push('/login')
        }}
      >
        Logout
      </a>
    </Layout>
  )
}

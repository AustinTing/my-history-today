import React, { useState } from 'react'
import fetchJSON, { FetchError } from 'library/fetchJSON'
import useUser from 'library/useUser'
import Form from 'components/Form'
import Layout from 'components/Layout'

export default function Login () {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true
  })
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <Layout>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>On this day</span>
          <span className='block text-pink-500'>Meet Your History</span>
        </h2>
        {/* <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700'
              >
                Login
              </a>
            </div>
          </div> */}
        <div className='login'>
          <Form
            errorMessage={errorMessage}
            onSubmit={async function handleSubmit (event) {
              event.preventDefault()
              const body = {
                username: event.currentTarget.username.value
              }

              try {
                mutateUser(
                  await fetchJSON('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                  })
                )
              } catch (error) {
                if (error instanceof FetchError) {
                  setErrorMessage(error.data.message)
                } else {
                  console.error('An unexpected error happened:', error)
                }
              }
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

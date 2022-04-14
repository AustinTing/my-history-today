import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export default function useUser ({
  redirectTo = '',
  redirectIfFound = false
} = {}) {
  console.log('library/useUser', { redirectTo, redirectIfFound })
  const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)

  useEffect(() => {
    // if no redirect needed, just return
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !(user && user.isLogin)) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && (user && user.isLogin))
    ) {
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}

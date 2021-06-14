import React, { useEffect } from 'react'
import { useAuth } from './use-auth'
import { useRouter } from 'next/router'

const onRedirecting = () => <></>

const returnTo = () =>
  `${window.location.pathname}${window.location.search}`

export const withAuthenticationRequired =()=> {
  return function WithAuthenticationRequired(props) {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (isLoading || isAuthenticated) {
        return
      }

      const url = new URL('/', window?.location.href)
      url.searchParams.set('returnTo', returnTo())
      router.push(url)
    }, [isLoading, router])

    return isAuthenticated ? <Component {...props} /> : onRedirecting()
  }
}

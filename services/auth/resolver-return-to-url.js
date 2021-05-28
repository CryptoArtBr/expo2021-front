export const resolveReturnToUrl = () => {
  const url = new URL(window.location.href)
  const returnTo = url.searchParams.get('returnTo')
  const { host } = new URL(returnTo || '', window.location.href)
  const allowedHost = window.location.host
  const isAllowed = allowedHost === host

  if (returnTo === null) return '/'
  if (isAllowed) return returnTo
  return '/'
}

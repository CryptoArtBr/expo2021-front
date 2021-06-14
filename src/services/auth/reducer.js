export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        state: 'loading',
        isLoading: true,
        isAuthenticated: false,
        isUnauthenticated: false,
        isError: false,
      }
    case 'AUTHENTICATED':
      return {
        state: 'authenticated',
        isLoading: false,
        isAuthenticated: true,
        isUnauthenticated: false,
        isError: false,
        user: action.user,
      }
    case 'UNAUTHENTICATED':
      return {
        state: 'unauthenticated',
        isLoading: false,
        isAuthenticated: false,
        isUnauthenticated: true,
        isError: false,
      }
    case 'ERROR':
      return {
        state: 'error',
        isLoading: false,
        isAuthenticated: false,
        isUnauthenticated: false,
        isError: true,
        error: action.error,
      }
    default:
      return state
  }
}

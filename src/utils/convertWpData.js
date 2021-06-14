import { WP_URL } from '../../env'

export const convertWpPostsToCollections = (posts) => {
  let colecoesObject = {}
  let colecoesArray = []
  const obras = posts.filter((post) => {
    return (
      post.categories.filter(
        (category) => category.link === `${WP_URL}/category/obra/`,
      ).length >= 1
    )
  })

  obras.map((obra) => {
    obra.categories.map((category) => {
      if (category.link.indexOf(`${WP_URL}/category/autor/`) === 0) {
        let autorName = category.link.replace(`${WP_URL}/category/autor/`, '')
        autorName = autorName.replace('/', '')

        if (colecoesObject[autorName] === undefined) {
          colecoesObject[autorName] = []
        }

        colecoesObject[autorName].push(obra)
      }
    })
  })

  for (let autor in colecoesObject) {
    colecoesArray.push({
      autor,
      obras: colecoesObject[autor],
    })
  }

  return colecoesArray
}

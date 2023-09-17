import parseResponse from "./parser"

const fetcher = (jwt) => async (url) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  return parseResponse(response)
}

export default fetcher

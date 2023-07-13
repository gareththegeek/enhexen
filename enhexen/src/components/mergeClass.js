export const mergeClass = ({ className: a }, b) => {
  const result = [b, a].join(' ').trim()
  if (result === '') {
    return undefined
  }
  return result
}

export const noClass = ({ className: _, ...rest }) => ({ ...rest })

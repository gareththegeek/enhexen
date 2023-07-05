export const mergeClass = ({ className: a }, b) => [a, b].join(' ')

export const noClass = ({ className: _, ...rest }) => ({ ...rest })

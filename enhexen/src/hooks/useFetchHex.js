import useFetch from "./useFetch";

const useFetchHex = (reference) =>
  useFetch(
    `hexes?populate=region&populate=adventure&populate=settlement&filters[reference]=${reference}`,
    !!reference
  )

export default useFetchHex

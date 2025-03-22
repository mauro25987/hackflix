import { config } from '@/app/lib/config'
import { Movie } from '@/app/lib/definitions'

const { apiSecret, apiUrl } = config

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiSecret}`,
  },
}

export const fetchMovies = async ({ path }: { path: string }): Promise<Movie[]> => {
  const response = await fetch(`${apiUrl}/movie/${path}?language=en-US&page=1`, options)
  const data = await response.json()
  return data.results
}

export const fetchMovieDetail = async ({ movieId }: { movieId: string }) => {
  const data = await fetch(`${apiUrl}/movie/${movieId}?language=en-US`, options)
  return data.json()
}

export const fetchMovieFind = async ({ search }: { search: string }): Promise<Movie[]> => {
  const response = await fetch(
    `${apiUrl}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
  const data = await response.json()
  return data.results
}

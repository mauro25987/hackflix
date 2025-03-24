import { config } from '@/app/lib/config'
import { Movie, MovieType } from '@/app/lib/definitions'

const { apiSecret, apiUrl } = config

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiSecret}`,
  },
}

export const fetchMovies = async ({
  type,
  path,
}: {
  type: MovieType
  path: string
}): Promise<Movie[]> => {
  const response = await fetch(`${apiUrl}/${type}/${path}?language=en-US&page=1`, options)
  const data = await response.json()
  return data.results
}

export const fetchMovieDetail = async ({
  type = 'movie',
  movieId,
}: {
  type?: MovieType
  movieId: string
}): Promise<Movie> => {
  const data = await fetch(`${apiUrl}/${type}/${movieId}?language=en-US`, options)
  return data.json()
}

export const fetchMovieFind = async ({
  type = 'movie',
  search,
}: {
  type?: MovieType
  search: string
}): Promise<Movie[]> => {
  const response = await fetch(
    `${apiUrl}/search/${type}?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
  const data = await response.json()
  return data.results
}

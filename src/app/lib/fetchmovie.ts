import { config } from '@/app/lib/config'
import { Movie } from '@/app/lib/definitions'

const { apiSecret, apiUrl } = config

export const fetchMovies = async ({ path }: { path: string }): Promise<Movie[]> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiSecret}`,
    },
  }
  const response = await fetch(`${apiUrl}${path}`, options)
  const data = await response.json()
  return data.results
}

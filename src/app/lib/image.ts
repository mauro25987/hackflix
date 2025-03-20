import { config } from './config'
import { ImagesProps } from './definitions'

const { apiSecret, apiUrl } = config

export async function fetchConfigImages(): Promise<ImagesProps> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiSecret}`,
    },
  }

  const response = await fetch(`${apiUrl}/configuration`, options)
  const data = await response.json()
  return data.images
}

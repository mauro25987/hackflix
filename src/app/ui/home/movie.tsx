import { useFetchMovies } from '@/app/hooks/useFetch'
import { PosterSizes } from '@/app/lib/definitions'
import { fetchConfigImages } from '@/app/lib/image'
import Image from 'next/image'

type MovieListProps = {
  title: string
  path: string
}

export default async function MovieList({ title, path }: MovieListProps) {
  const data = await useFetchMovies({ path })
  const { secure_base_url } = await fetchConfigImages()
  // const imgSize: BackdropSizes = 'original'
  const imgSize: PosterSizes = 'w342'

  return (
    <div>
      <h1 className="text-4xl font-semibold text-amber-800">Peliculas {title}</h1>
      <div className="grid grid-cols-6 gap-6">
        {data.map(({ id, title, poster_path }) => (
          <div key={id}>
            <div>{title}</div>
            <div>
              <Image
                alt={title}
                width={350}
                height={500}
                src={
                  poster_path
                    ? `${secure_base_url}${imgSize}${poster_path}`
                    : 'https://picsum.photos/350/500'
                }
              />
            </div>
            <div>aca {poster_path}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

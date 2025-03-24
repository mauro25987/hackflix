import type { MovieType, PosterSizes } from '@/app/lib/definitions'
import { fetchMovies } from '@/app/lib/fetchmovie'
import { fetchConfigImages } from '@/app/lib/image'
import Image from 'next/image'
import Link from 'next/link'

type MovieListProps = {
  title: string
  path: string
  type: MovieType
}

export default async function MovieList({ title, path, type }: MovieListProps) {
  const data = await fetchMovies({ type, path })
  const { secure_base_url } = await fetchConfigImages()
  // const imgSize: BackdropSizes = 'original'
  const imgSize: PosterSizes = 'w342'
  return (
    <div>
      <h1 className="m-8 text-center text-4xl font-semibold text-amber-800">{title}</h1>
      <div className="m-8 grid grid-cols-5 gap-6">
        {data.map(({ id, title, poster_path }) => (
          <Link href={`/movie/${id}`} key={id} className="group flex flex-col justify-between">
            <div className="overflow-hidden rounded-lg">
              <Image
                alt={title}
                width={350}
                height={500}
                src={
                  poster_path
                    ? `${secure_base_url}${imgSize}${poster_path}`
                    : 'https://picsum.photos/350/500'
                }
                className="transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-2 text-center text-sm font-medium">{title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

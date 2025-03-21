import MovieList from '@/app/ui/home/movie'
import InputSearch from '@/app/ui/input-search'
import { Suspense } from 'react'
import { fetchMovieFind } from './lib/fetchmovie'

type ParamsProps = { searchParams: Promise<{ search: string }> }

const movies = [
  { title: 'Now Playing', path: 'now_playing' },
  { title: 'Popular', path: 'popular' },
  { title: 'Top Rated', path: 'top_rated' },
  { title: 'Upcoming', path: 'upcoming' },
]

export default async function Home({ searchParams }: ParamsProps) {
  const { search } = await searchParams
  if (search) {
    const searchMovie = await fetchMovieFind({ search })
    console.log(searchMovie)
  } else {
    console.log('no hay resultados')
  }

  return (
    <div>
      <Suspense fallback={<div>Espero el input</div>}>
        <InputSearch />
      </Suspense>
      {movies.map(({ title, path }) => (
        <Suspense fallback={<div>Cargando</div>} key={title}>
          <MovieList title={title} path={path} />
        </Suspense>
      ))}
    </div>
  )
}

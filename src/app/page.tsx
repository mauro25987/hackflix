import MovieList from '@/app/ui/home/movie-list'
import InputSearch from '@/app/ui/input-search'
import { Suspense } from 'react'
import { fetchMovieFind } from './lib/fetchmovie'

type ParamsProps = { searchParams: Promise<{ search?: string }> }

const movies = [
  { title: 'Now Playing', path: 'now_playing' },
  { title: 'Popular', path: 'popular' },
  { title: 'Top Rated', path: 'top_rated' },
  { title: 'Upcoming', path: 'upcoming' },
]

export default async function Home({ searchParams }: ParamsProps) {
  const { search = '' } = await searchParams
  const searchQuery = search.trim() !== ''
  const hasSearchResults = searchQuery ? await fetchMovieFind({ search }) : []

  return (
    <div>
      <Suspense fallback={<div>Espero el input</div>}>
        <InputSearch />
      </Suspense>
      {searchQuery ? (
        hasSearchResults.length > 0 ? (
          <ul className="mt-10 text-center">
            {hasSearchResults.map(({ id, title, poster_path }) => (
              <li key={id}>
                {title} - {poster_path}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 text-center text-3xl font-extrabold">No hay resultados</div>
        )
      ) : (
        movies.map(({ title, path }) => (
          <Suspense fallback={<div>Cargando</div>} key={title}>
            <MovieList title={title} path={path} />
          </Suspense>
        ))
      )}
    </div>
  )
}

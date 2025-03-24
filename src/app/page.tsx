import { MovieProps } from '@/app/lib/definitions'
import { fetchMovieFind } from '@/app/lib/fetchmovie'
import MovieList from '@/app/ui/home/movie-list'
import InputSearch from '@/app/ui/input-search'
import { Suspense } from 'react'

type ParamsProps = { searchParams: Promise<{ search?: string }> }

const movies: MovieProps[] = [
  { title: 'Now Playing', path: 'now_playing', type: 'movie' },
  { title: 'Popular', path: 'popular', type: 'movie' },
  { title: 'Top Rated', path: 'top_rated', type: 'movie' },
  { title: 'Upcoming', path: 'upcoming', type: 'movie' },
  { title: 'On the Air', path: 'on_the_air', type: 'tv' },
  { title: 'Popular', path: 'popular', type: 'tv' },
  { title: 'Top Rated', path: 'top_rated', type: 'tv' },
  { title: 'Airing Today', path: 'airing_today', type: 'tv' },
]

export default async function Home({ searchParams }: ParamsProps) {
  const search = (await searchParams)?.search || ''
  // console
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
        movies.map(({ title, path, type }) => (
          <Suspense fallback={<div>Cargando</div>} key={title}>
            <MovieList title={title} path={path} type={type} />
          </Suspense>
        ))
      )}
    </div>
  )
}

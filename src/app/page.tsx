import MovieList from '@/app/ui/home/movie'
import InputSearch from '@/app/ui/input-search'
import { Suspense } from 'react'

const movies = [
  { title: 'Now Playing', path: 'now_playing' },
  { title: 'Popular', path: 'popular' },
  { title: 'Top Rated', path: 'top_rated' },
  { title: 'Upcoming', path: 'upcoming' },
]
export default async function Home() {
  return (
    <div>
      <h1 className="m-15 text-center text-4xl font-bold">Hola Hackflix</h1>
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

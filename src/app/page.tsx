import MovieList from '@/app/ui/home/movie'
import { Suspense } from 'react'

const movies = [
  { title: 'Now Playing', path: '/movie/now_playing?language=en-US&page=1' },
  { title: 'Popular', path: '/movie/popular?language=en-US&page=1' },
  { title: 'Top Rated', path: '/movie/top_rated?language=en-US&page=1' },
  { title: 'Upcoming', path: '/movie/upcoming?language=en-US&page=1' },
]
export default async function Home() {
  return (
    <div>
      Hola Hacflix
      {movies.map(({ title, path }) => (
        <Suspense fallback={<div>Cargando</div>} key={title}>
          <MovieList title={title} path={path} />
        </Suspense>
      ))}
    </div>
  )
}

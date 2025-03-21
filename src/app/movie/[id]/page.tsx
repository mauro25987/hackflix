import { fetchMovieDetail } from '@/app/lib/fetchmovie'

type Params = { params: Promise<{ id: string }> }

export default async function MoviePage({ params }: Params) {
  const { id } = await params
  const movie = await fetchMovieDetail({ movieId: id })
  return <div>Hola {movie.title}</div>
}

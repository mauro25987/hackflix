import { fetchMovieDetail } from '@/app/lib/fetchmovie'

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const movie = await fetchMovieDetail({ movieId: id })
  console.log(movie)
  return <div>Hola {movie.title}</div>
}

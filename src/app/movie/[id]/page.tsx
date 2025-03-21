import { fetchMovieDetail } from '@/app/lib/fetchmovie'

type Params = Promise<{ id: string }>

export default async function MoviePage({ params }: { params: Params }) {
  const { id } = await params
  const movie = await fetchMovieDetail({ movieId: id })
  console.log(movie)
  return <div>Hola {movie.title}</div>
}

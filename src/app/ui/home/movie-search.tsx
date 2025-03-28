// import { fetchMovieFind } from '@/app/lib/fetchmovie'

// export default async function MovieSearch({ search }: { search: string }) {
//   const searchQuery = search.trim() !== ''
//   const hasSearchResults = searchQuery ? await fetchMovieFind({ search }) : []
//   return (
//     <ul className="mt-10 text-center">
//       {hasSearchResults.map(({ id, title, poster_path }) => (
//         <li key={id}>
//           {title} - {poster_path}
//         </li>
//       ))}
//     </ul>
//   )
// }

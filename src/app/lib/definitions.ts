export type Movie = {
  id: number
  title: string
  original_title: string
  backdrop_path: string
  poster_path: string
  overview: string
  release_date: string
  original_language: string
}

export type BackdropSizes = 'w300' | 'w780' | 'w1280' | 'original'
export type LogoSizes = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'
export type PosterSizes = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'

export type ImagesProps = {
  secure_base_url: string
}

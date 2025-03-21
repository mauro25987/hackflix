import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Movie' }
// export type Params = Promise<{ id: string }>

export default function MovieLayout({ children }: { children: React.ReactNode }) {
  // const { id } = await params
  return <>{children}</>
}

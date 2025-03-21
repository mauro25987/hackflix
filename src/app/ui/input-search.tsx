'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function InputSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className="text-center">
      <label htmlFor="search">Buscador: </label>
      <input
        type="text"
        name="search"
        placeholder="Busca una pelicula"
        onChange={event => handleSearch(event.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
        className="rounded-lg border border-gray-300 px-4 py-2 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  )
}

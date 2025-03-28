import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  console.log(searchParams)
  const search = searchParams.get('buscando')
  console.log(search)
  return NextResponse.json({ message: 'Hello, world!' })
}

export async function POST(request: Request) {
  const data = await request.json()
  console.log(data)
  return NextResponse.json({ data })
}

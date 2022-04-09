import { NextResponse } from 'next/server'
import absoluteUrl from 'next-absolute-url'

export function middleware (req) {
  const { origin } = absoluteUrl(req)
  if (Math.round(Math.random * 2 + 1)) {
    console.log()
    return NextResponse.redirect(`${origin}/login`)
  }
  return NextResponse.redirect(`${origin}/`)
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  
  if (request.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = request.nextUrl.pathname.replace('/api/entries/', '')
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if ( !checkMongoIDRegExp.test(id)){
      return new NextResponse(
        JSON.stringify({
          succes: false,
          message: `${id} is not valid MongoID`
        }),
        {
          status: 400, headers: { 'content-type': 'application/json'}
        }
      )
    }
  }
  // console.log({request: request.nextUrl })
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: [ 
    // '/api/:path', 
    '/api/entries/:path*'
  ]
}
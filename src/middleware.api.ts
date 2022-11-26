import { NextResponse } from 'next/server';
import { PATHS } from './constants/paths';
import type { NextMiddleware, NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static).*)']
};

const middleware: NextMiddleware = (request: NextRequest) => {
  if (process.env.APP_ENV === 'production') return;

  const authHeader = request.headers.get('authorization');
  const url = request.nextUrl;

  if (authHeader) {
    const basicAuth = authHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    if (
      user === process.env.BASIC_AUTH_USER &&
      password === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  url.pathname = PATHS.APIS.AUTH.PATH;

  return NextResponse.rewrite(url);
};

export default middleware;

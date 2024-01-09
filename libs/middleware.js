import { NextResponse } from "next/server";
// import { verifyJwtToken } from "@/libs/auth";

import { NextResponse } from "next/server";
import { verifyJwtToken } from "./auth";

const AUTH_PAGES = ["/login",
"/chat"
];

const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request) {

  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };
  const hasVerifiedToken = token ;
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);
  console.log("pathname",nextUrl.pathname);
  console.log("is auth ",isAuthPageRequested);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }
    const response = NextResponse.redirect(new URL(`/`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    );
    response.cookies.delete("token");
    return response;
  }

  return NextResponse.next();

}
export const config = { matcher: ["/login", "/chat"] };






// import { verifyJwtToken } from "./auth";

// const AUTH_PAGES = ['/login', '/register']

// const isAuthPages = (url) => AUTH_PAGES.some(page => page.startsWith(url))
// export async function middleware(request){
//   const { url, nextUrl, cookies } = request;
//   const {value : token} = cookies.get( 'token') ?? {value: null}

//   const hasVerifiedToken = token && (await verifyJwtToken(token));
//   const isAuthPageRequested = isAuthPages(nextUrl.pathname);

//   if(isAuthPageRequested){
//     if(!hasVerifiedToken){
//       const response = NextResponse.next();

//       return response;
//     }

//     const response = NextResponse.redirect(new url("/", url))
//     return response;
//   }
  
//   if(!hasVerifiedToken){
//     const searchParams = new URLSearchParams(nextUrl.searchParams);
//     searchParams.set("next", nextUrl.pathname);

//     return NextResponse.redirect(new URL(`/login?${searchParams}`, url))
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher : [
//     '/login',
//     '/chat',
//   ]
// }
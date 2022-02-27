// import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  const sessionToken = req.cookies["next-auth.session-token"];

  if (sessionToken === undefined) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

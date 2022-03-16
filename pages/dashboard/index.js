import React, { useEffect } from "react";
import CardsDashJS from "../../components/CardsDashJS";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      return router.push("/");
    }
  });

  if (!session) return null;

  return (
    <LayoutDashMainJS title="Dashboard" defaultSelect="1">
      <h2>Hello, {session.user.name}</h2>
      <CardsDashJS />
    </LayoutDashMainJS>
  );
};

export default Dashboard;

// import type { NextFetchEvent, NextRequest } from 'next/server'
// import { NextResponse } from "next/server";

// export async function middleware(req, ev) {
//   const sessionToken = req.cookies["next-auth.session-token"];

//   if (sessionToken === undefined) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/";
//     return NextResponse.redirect(url);
//   }
// }

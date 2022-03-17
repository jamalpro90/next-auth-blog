import React from "react";
import CardsDashJS from "../../components/CardsDashJS";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { getSession, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <LayoutDashMainJS title="Dashboard" defaultSelect="1">
      <h2>Hello, {session.user.name}</h2>
      <CardsDashJS />
    </LayoutDashMainJS>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

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

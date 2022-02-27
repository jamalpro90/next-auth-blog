import React from "react";
import CardsDashJS from "../../components/CardsDashJS";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { useSession } from "next-auth/react";

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

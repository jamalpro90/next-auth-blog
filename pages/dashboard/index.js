import React from "react";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import CardsDashJS from "../../components/CardsDashJS";

const Dashboard = () => {
  return (
    <LayoutDashMainJS title="Dashboard" defaultSelect="1">
      <h2>Hello, Jamal Pro</h2>
      <CardsDashJS />
    </LayoutDashMainJS>
  );
};

export default Dashboard;

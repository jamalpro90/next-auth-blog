import Head from "next/head";
import React from "react";
import NavbarJS from "./NavbarJS";

const LayoutJS = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavbarJS />

      <div className="layout-children">{children}</div>
    </>
  );
};

export default LayoutJS;

import Head from "next/head";
import React from "react";
import FooterJS from "./FooterJS";
import NavbarJS from "./NavbarJS";

const LayoutJS = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavbarJS />

      <div className="layout-children">{children}</div>

      <FooterJS />
    </>
  );
};

export default LayoutJS;

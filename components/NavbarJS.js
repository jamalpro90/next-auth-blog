import { AliwangwangFilled, LeftCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ButtonNavJS from "./ButtonNavJS";

const NavbarJS = () => {
  const iconContainer = useRef(null);
  const menuMobile = useRef(null);

  const handleToggleMobile = () => {
    iconContainer.current.classList.toggle("toggle-mobile-icon");
    menuMobile.current.classList.toggle("toggle-mobile-menu");
  };

  return (
    <div className="navbar">
      {/* Desktop Navbar */}
      <div className="container desktop">
        {/* Left */}
        <div className="left">
          <Link href="/">
            <a>
              <AliwangwangFilled className="icon" />
            </a>
          </Link>
        </div>

        {/* Right */}
        <div className="right">
          <p>Hello, Jamal Pro</p>
          <ButtonNavJS text="Sign out" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="container mobile">
        {/* Left */}
        <div className="left">
          <Link href="/">
            <a>
              <AliwangwangFilled className="icon" />
            </a>
          </Link>
        </div>

        {/* Right */}
        <div className="right">
          <div className="icon-container" ref={iconContainer}>
            <LeftCircleFilled
              className="icon-menu-mobile"
              onClick={handleToggleMobile}
            />
          </div>
        </div>

        {/* Nav Menu */}
        <div className="nav-menu-mobile" ref={menuMobile}>
          <p>Hello, Jamal Pro</p>
          <ButtonNavJS text="Sign out" />
        </div>
      </div>
    </div>
  );
};

export default NavbarJS;

import { AliwangwangFilled, LeftCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import React, { useRef } from "react";
import ButtonNavJS from "./ButtonNavJS";
import { signIn } from "next-auth/react";

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
          <ButtonNavJS text="Sign In" onClick={() => signIn()} />
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
          <ButtonNavJS text="Sign In" onClick={() => signIn()} />
        </div>
      </div>
    </div>
  );
};

export default NavbarJS;

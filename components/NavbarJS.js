import { AliwangwangFilled, LeftCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import React, { useRef } from "react";
import ButtonNavJS from "./ButtonNavJS";
import { signIn, signOut, useSession } from "next-auth/react";
import { Tooltip } from "antd";

const NavbarJS = () => {
  const iconContainer = useRef(null);
  const menuMobile = useRef(null);
  const { data: session } = useSession();

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
          <Link href="/" passHref>
            <Tooltip placement="right" title="Go To Home" color="red">
              <a>
                <AliwangwangFilled className="icon" />
              </a>
            </Tooltip>
          </Link>
        </div>

        {/* Right */}
        {session ? (
          <div className="right">
            <p>Hello, {session.user.name}</p>
            <Link href="/dashboard" passHref>
              <Tooltip placement="bottom" title="Go To Dashboard" color="red">
                <a className="dash-link">
                  <strong>DASHBOARD</strong>
                </a>
              </Tooltip>
            </Link>
            <ButtonNavJS text="Sign out" onClick={() => signOut()} />
          </div>
        ) : (
          <div className="right">
            {/* <p>Hello, Jamal Pro</p> */}
            <ButtonNavJS text="Sign in" onClick={() => signIn()} />
          </div>
        )}
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

        {/* Right Mobile */}
        <div className="right">
          <div className="icon-container" ref={iconContainer}>
            <LeftCircleFilled
              className="icon-menu-mobile"
              onClick={handleToggleMobile}
            />
          </div>
        </div>

        {/* Nav Menu Mobile */}
        {session ? (
          <div className="nav-menu-mobile" ref={menuMobile}>
            <p>Hello, {session.user.name}</p>
            <ButtonNavJS text="Sign out" onClick={() => signOut()} />
          </div>
        ) : (
          <div className="nav-menu-mobile" ref={menuMobile}>
            {/* <p>Hello, Jamal Pro</p> */}
            <ButtonNavJS text="Sign in" onClick={() => signIn()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarJS;

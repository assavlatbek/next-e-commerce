"use client";

import React, { useEffect, useState } from "react";

import "./index.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/shares/NavLink";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.add("hiddin");
    if (menuOpen) {
      document.body.classList.add("hiddin");
    } else {
      document.body.classList.remove("hiddin");
    }
  }, [menuOpen]);

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link href={"/"}>
            <h1>E-COMMERCE</h1>
          </Link>
        </div>

        <div className={`navigation ${menuOpen ? "open" : "hide"}`}>
          <div className="action">
            <NavLink onClick={() => setMenuOpen(false)} href={"/"}>
              Home
            </NavLink>
            {Boolean(
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null
            ) ? (
              <>
                <NavLink
                  onClick={() => {
                    window.location.href = "/orders";
                  }}
                  href={"/orders"}
                >
                  Orders
                </NavLink>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  href={"/favourites"}
                >
                  Favourites
                </NavLink>{" "}
              </>
            ) : null}
            <NavLink onClick={() => setMenuOpen(false)} href={"/all-products"}>
              All Products
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} href={"/about"}>
              About us
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} href={"/contact"}>
              Contact us
            </NavLink>
            {Boolean(
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null
            ) ? (
              <NavLink onClick={() => setMenuOpen(false)} href={"/account"}>
                Account
              </NavLink>
            ) : (
              <>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  href={"/auth/register"}
                >
                  Register
                </NavLink>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  href={"/auth/login"}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
        <div className={menuOpen ? `open-menu menu` : `menu`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <Image
              width={50}
              height={50}
              src={
                menuOpen
                  ? `https://static.thenounproject.com/png/4984268-200.png`
                  : `https://www.svgrepo.com/show/315606/menu-left.svg`
              }
              alt="nav"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

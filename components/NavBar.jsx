/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from "next/link";
import { useState } from "react";
import React from "react";

import { useSession, signOut } from "next-auth/client";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [session] = useSession() || null;

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gradient-to-br from-green-300 to-green-500 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              TakoYaki Radio
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Home
              </a>
            </Link>
            {session && (
              <>
                <Link href="/profile">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Profile
                  </a>
                </Link>
                <Link
                  href="/"
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
                >
                  <button onClick={() => signOut()}>Sign out</button>
                </Link>
              </>
            )}
            {!session && (
              <>
                <Link href="/login">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Login
                  </a>
                </Link>
                <Link href="/createAccount">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Create account
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

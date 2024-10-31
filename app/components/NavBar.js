"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function MyNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="h-24 w-full bg-black md:fixed top-0 flex justify-between items-center px-5 z-10">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/hut.svg"
              alt="logo"
              width={50}
              height={70}
              className="rounded-3xl"
            />
          </Link>
        </div>

        {/* Je met mon menu burger pour les petit écrans */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <Image
              src="/menu001.png"
              alt="menu"
              width={50}
              height={50}
              className="block"
            />
          </button>
        </div>

        <ul className={`md:flex md:items-center md:space-x-6 hidden`}>
          <li>
            <Link
              href="#Accueil"
              className="text-white text-xl hover:bg-cyan-600 rounded-3xl py-2 px-4"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="#A_Propos"
              className="text-white text-xl hover:bg-cyan-600 rounded-3xl py-2 px-4"
            >
              A propos
            </Link>
          </li>
          <li>
            <Link
              href="#Technologies"
              className="text-white text-xl hover:bg-cyan-600 rounded-3xl py-2 px-4"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="#Contact"
              className="text-white text-xl hover:bg-cyan-600 rounded-3xl py-2 px-4"
            >
              Contacts
            </Link>
          </li>
        </ul>

        {/* Icônes de mes réseaux sociaux */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <Image src="/Linkedin.png" alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100028926079303">
            <Image src="/Facebook.png" alt="Facebook" width={30} height={30} />
          </Link>
          <Link href="/">
            <Image
              src="/Instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </Link>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-black py-4 shadow-lg z-20">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white text-lg hover:bg-purple-700 rounded-3xl py-2 px-4"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-lg hover:bg-purple-700 rounded-3xl py-2 px-4"
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-lg hover:bg-purple-700 rounded-3xl py-2 px-4"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-lg hover:bg-purple-700 rounded-3xl py-2 px-4"
                >
                  Contacts
                </Link>
              </li>
              <div className="flex space-x-4 mt-4">
                <Link href="/">
                  <Image
                    src="/Linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/Facebook.png"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/Instagram.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default MyNav;

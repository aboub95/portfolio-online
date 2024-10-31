import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

function Nav() {
  // const [Nav, setNav] = useState(false);
  return (
    <div>
      <nav className="w-full h-24 bg-black fixed top-0 right-0 z-10">
        <div className="flex justify-between px-4  lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* Ici je mettrai mon logo */}
            <Link href="/">
              <h2 className="text-2xl text-cyan-600 font-bold">LOGO</h2>
            </Link>
            {/* Menu berggeur */}

            <div className="">
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-700">
                  <Link href="/">A propos</Link>
                </li>
              </ul>
              <button className="p-2 text-gray-900 rounded-md outline-none focus:border-red-600">
                <Image
                  src="/MenuBg.png"
                  alt="menu"
                  width={30}
                  height={300}
                  className=" active:border-none md:hidden"
                />
              </button>

              <form
                action="/"
                className="text-xl font-bold flex justify-around items-center mt-5 m-5"
              >
                <label
                  className="flex justify-between items-center p-8 rounded-2xl bg-cyan-500 w-52 h-14 cursor-pointer"
                  onClick={toggleCv}
                >
                  <input type="checkbox" className="h-8 w-10 ml-5 peer" />
                  <span className="bg-gray-300 w-48 h-12 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-green-600 peer-checked:after:translate-x-4">
                    Cv
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

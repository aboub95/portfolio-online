import Image from "next/image";
import Link from "next/link";

function MyNav() {
  return (
    <>
      <nav className="h-24 w-full bg-black md:fixed top-0 flex justify-around items-center  z-10">
        <div className="text-justify ml-3 py-3 md:py-5 md:block">
          <Link href="/">
            <h2 className="text-2xl text-cyan-600 font-bold">LOGO</h2>
          </Link>
        </div>
        <div className="flex justify-between items-center ml-32">
          <ul className="h-12 flex justify-between items-center max-md:hidden">
            <li className="pb-6 text-xl text-white py-2 md:px-6  border-b-2 md:border-b-0 rounded-3xl hover:bg-purple-700">
              <Link href="/" className="flex justify-center items-center mt-3">
                Accueil
              </Link>
            </li>
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center rounded-3xl border-b-2 md:border-b-0 hover:bg-purple-700">
              <Link href="/" className="flex justify-center items-center mt-3">
                A propos
              </Link>
            </li>
            <li className="pb-6 text-xl text-white py-2 md:px-6  rounded-3xl text-center border-b-2 md:border-b-0 hover:bg-purple-700">
              <Link href="/" className="flex justify-center items-center mt-3">
                Projects
              </Link>
            </li>
            <li className="pb-6 text-xl text-white py-2 rounded-3xl md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-700">
              <Link href="/" className="flex justify-center items-center mt-3">
                Contacts
              </Link>
            </li>
          </ul>
          <button className="p-2 text-gray-900 rounded-md outline-none focus:border-red-600">
            <Image
              src="/MenuBg.png"
              alt="menu"
              width={30}
              height={300}
              className=" active:border-none"
            />
          </button>
        </div>
        <div className="h-20 w-52 bg-black flex justify-around items-center max-md:hidden">
          <Link href="/">
            <Image src="/Linkedin.png" alt="linkdin" width={30} height={50} />
          </Link>
          <Link href="/">
            <Image src="/Facebook.png" alt="linkdin" width={30} height={50} />
          </Link>
          <Link href="/">
            <Image src="/Instagram.png" alt="linkdin" width={30} height={50} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MyNav;

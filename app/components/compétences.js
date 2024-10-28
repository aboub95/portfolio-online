import Image from "next/image";

function CardC() {
  return (
    <>
      <div>
        {/* ici je met les carte des technologies acquises! */}
        <div
          className="h-screen w-full grid grid-cols-3 max-sm:grid-cols-3 items-center max-md:flex-col bg-cover"
          style={{ backgroundImage: `url(/Desk.gif)` }}
        >
          <div className=" w-6/12 bg-black rounded-xl m-auto text-center">
            <h1 className="text-3xl text-white font-bold text-center">HTML</h1>
            <Image
              src="/Logo.jpeg"
              alt="HTML"
              width={2000}
              height={2000}
              className="w-full rounded-xl h-36"
            />
          </div>
          <div className=" w-6/12 bg-black rounded-xl">
            <h1 className="text-3xl text-white font-bold text-center">CSS</h1>
            <Image
              src="/Will SCSS Be Replaced by CSS3_.jpeg"
              alt="HTML"
              width={2000}
              height={2000}
              className="w-full rounded-xl h-36"
            />
          </div>
          <div className=" w-6/12 bg-black rounded-xl">
            <h1 className="text-3xl text-white font-bold text-center">
              JavaScript
            </h1>
            <Image
              src="/Js.jpg"
              alt="CSS"
              width={2000}
              height={20}
              className="w-full rounded-xl h-36"
            />
          </div>
          <div className=" w-6/12 bg-black rounded-xl m-auto">
            <h1 className="text-3xl text-white font-bold text-center">
              Tailwind css
            </h1>
            <Image
              src="/A Look at Tailwind CSS.jpeg"
              alt="CSS"
              width={2000}
              height={20}
              className="w-full rounded-xl h-36"
            />
          </div>
          <div className=" w-6/12 bg-black rounded-xl">
            <h1 className="text-3xl text-white font-bold text-center">Git</h1>
            <Image
              src="/Git.jpg"
              alt="CSS"
              width={2000}
              height={20}
              className="w-full rounded-xl h-36"
            />
          </div>
          <div className="w-6/12 bg-black rounded-xl">
            <h1 className="text-3xl text-white font-bold text-center">
              Next js
            </h1>
            <Image
              src="/next14.png"
              alt="HTML"
              width={2000}
              height={2000}
              className="w-full rounded-xl h-36"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardC;

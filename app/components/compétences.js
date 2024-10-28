import Image from "next/image";

function CardC() {
  return (
    <div>
      {/* ici je met les carte des technologies acquises! */}
      <div
        className="min-h-screen w-full grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-cover"
        style={{ backgroundImage: `url(/Desk.gif)` }}
      >
        <div className="w-full bg-gray-500 rounded-xl m-auto text-center p-4">
          <h1 className="text-3xl text-white font-bold">HTML</h1>
          <Image
            src="/Logo.jpeg"
            alt="HTML"
            width={2000}
            height={2000}
            className="w-full rounded-xl h-36 object-cover"
          />
        </div>
        <div className="w-full bg-gray-500 rounded-xl m-auto text-center p-4">
          <h1 className="text-3xl text-white font-bold">CSS</h1>
          <Image
            src="/Will SCSS Be Replaced by CSS3_.jpeg"
            alt="CSS"
            width={2000}
            height={2000}
            className="w-full rounded-xl h-36 object-cover"
          />
        </div>
        <div className="w-full bg-gray-500 rounded-xl m-auto text-center p-4">
          <h1 className="text-3xl text-white font-bold">JavaScript</h1>
          <Image
            src="/Js.jpg"
            alt="JavaScript"
            width={2000}
            height={2000}
            className="w-full rounded-xl h-36 object-cover"
          />
        </div>
        <div className="w-full bg-gray-500 rounded-xl m-auto text-center p-4">
          <h1 className="text-3xl text-white font-bold">Tailwind CSS</h1>
          <Image
            src="/A Look at Tailwind CSS.jpeg"
            alt="Tailwind CSS"
            width={2000}
            height={2000}
            className="w-full rounded-xl h-36 object-cover"
          />
        </div>
        <div className="w-full bg-gray-500 rounded-xl m-auto text-center p-4">
          <h1 className="text-3xl text-white font-bold">Git</h1>
          <Image
            src="/Git.jpg"
            alt="Git"
            width={2000}
            height={2000}
            className="w-full rounded-xl h-36 object-cover"
          />
        </div>
        <div className="w-full bg-gray-500 rounded-xl m-auto text-center p-4">
          <h1 className="text-3xl text-white font-bold">Next.js</h1>
          <Image
            src="/next14.png"
            alt="Next.js"
            width={2000}
            height={2000}
            className="w-full rounded-xl h-36 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CardC;

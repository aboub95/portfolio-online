import Image from "next/image";
import Link from "next/link";

function header() {
  return (
    <>
      <header
        className="h-screen bg-slate-400 flex-col justify-center pt-3 pb-9 bg-cover"
        style={{ backgroundImage: `url(/route.gif)` }}
      >
        <div className="flex items-center h-3/4 w-5/6 ml-40 mt-16 ">
          <div className="h-full w-1/2 bg-transparent">
            <h1 className="text-4xl font-bold ml-9 mt-9 text-white">
              Mes project
            </h1>
            <h1 className="text-4xl font-bold ml-9 mt-14 text-white">
              Développeur front-End
            </h1>
            <p className="text-2xl text-center mt-9 text-white">
              Je suis un profesionnel du numérique, pour vos différents project.
              N’hésiter de me contacter.
            </p>
            <button className="h-12 w-40 rounded-2xl bg-orange-500 text-white font-bold hover:bg-orange-600 ml-10 mt-20">
              Contactez-moi
            </button>
          </div>
          <div className="h-full w-2/5 bg-white">
            <Image
              src="/marche.gif"
              width={2000}
              height={2000}
              alt="img"
              className="h-full w-full"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default header;

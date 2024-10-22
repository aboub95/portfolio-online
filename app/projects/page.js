import Image from "next/image";
import Link from "next/link";
import MyNav from "../components/NavBar";
const project = () => {
  return (
    <>
      <MyNav />
      <header
        className="h-screen bg-slate-400 flex-col mt-5 justify-center pt-3 pb-9 bg-cover"
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
      <main className="h-screen bg-gray-700 bg-cover">
        {/* ICI je mets la section project ! */}
        <h1 className="text-6xl text-center font-bold pt-8">Mes projects</h1>
        <div className="flex grid-cols-3 justify-around items-center mt-10">
          <div className="h-4/6 w-3/12 bg-slate-400 ">
            <div className="h-2/3 bg-white">
              <Image
                src="/Owona.jpg"
                alt="logo"
                width={2000}
                height={2000}
                className="h-full w-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">
              Project : Vision science Gabon
            </h1>
            <p>Conception d’un site de E-learning</p>
          </div>
          <div className="h-4/6 w-3/12 bg-slate-400 ">
            <div className="h-2/3 bg-white">
              <Image
                src="/abou3.gif"
                alt="logo"
                width={2000}
                height={2000}
                className="h-full w-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">
              Project : Vision science Gabon
            </h1>
            <p>Conception d’un site de E-learning</p>
          </div>
          <div className="h-4/6 w-3/12 bg-slate-400">
            <div className="h-2/3 bg-white">
              <Image
                src="/accueil2.gif"
                alt="logo"
                width={2000}
                height={2000}
                className="h-full w-full"
              />
            </div>
            <div className="h-1/2 w-full bg-red-500">
              <h1 className="text-2xl font-bold text-center">
                Project : Vision science Gabon
              </h1>
              <p>Conception d’un site de E-learning</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default project;

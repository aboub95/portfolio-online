import Image from "next/image";
import Link from "next/link";

function Accueil() {
  return (
    <div>
      <section
        id="Accueil"
        className="h-screen bg-gray-300 bg-cover"
        style={{ backgroundImage: `url(/galaxie.gif)` }}
      >
        <div className="flex items-center h-auto w-5/6 ml-28">
          <div className="h-1/3 w-1/2 bg-transparent">
            <h1 className="text-4xl font-bold ml-9 mt-28 text-white">
              ◄..Bienvenu sur mon portfolio..►
            </h1>
            <h1 className="text-4xl font-bold ml-9 mt-14 text-white"></h1>
            <p className="text-2xl text-center mt-9 text-white">
              Je suis un profesionnel du numérique, pour vos différents project.
              N’hésiter de me contacter.
            </p>
            <button className="h-12 w-40 rounded-2xl bg-cyan-500 text-white font-bold hover:bg-pink-500 ml-10 mt-20">
              Contactez-moi
            </button>
          </div>
          <div className=" h-1/2 ml-56 mt-12">
            <Image
              src="/marche.gif"
              width={200}
              height={1500}
              alt="img"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accueil;

import Image from "next/image";
import Link from "next/link";

function Accueil() {
  return (
    <div>
      <section
        id="Accueil"
        className="bg-gray-300 bg-cover bg-center"
        style={{ backgroundImage: `url(/galaxie.gif)` }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:h-screen w-full lg:w-5/6 lg:ml-28 p-4 lg:p-0">
          <div className="lg:w-1/2 bg-transparent text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 lg:mt-28 text-white">
              Votre projet mérite une interface utilisateur exceptionnelle –
              ensemble, réalisons-le !
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mt-6 lg:mt-9 text-white px-2 lg:px-0">
              En tant que professionnel du numérique, je suis à votre
              disposition pour réaliser vos projets. N’hésitez pas à me
              contacter !
            </p>
            <Link href="#Contact">
              <button className="h-12 w-40 rounded-2xl bg-cyan-500 text-white font-bold hover:bg-pink-500 mt-10 lg:mt-20">
                Contactez-moi
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Image
              src="/marche.gif"
              width={300}
              height={2000}
              alt="img"
              className="w-60 sm:w-72 md:w-80 lg:w-[450px] h-auto rounded-2xl mt-24"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accueil;

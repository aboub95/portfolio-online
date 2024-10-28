import Image from "next/image";
import Link from "next/link";
import MyCv from "./cv";

function A_propos() {
  return (
    <div>
      <section
        id="A_Propos"
        className="min-h-screen bg-black flex flex-col justify-center items-center bg-cover bg-center p-6"
        style={{ backgroundImage: `url(/astro.jpeg)` }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center pt-6 lg:pt-9 text-cyan-500">
          A propos
        </h1>
        <div className="bg-transparent w-full sm:w-10/12 lg:w-8/12 mx-auto mt-12 lg:mt-24 p-4 sm:p-6 lg:p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-cyan-900 text-2xl sm:text-3xl font-bold mb-4">
            Hello!!!
          </h2>
          <p className="text-lg sm:text-xl text-justify font-semibold text-white">
            Je suis Abou et je suis développeur front-end passionné. Avec 1 an
            d`expérience dans le domaine du développement web, je me suis
            spécialisé dans la création d`interfaces utilisateurs modernes,
            réactives et accessibles. Ma mission est de transformer des concepts
            créatifs en expériences numériques engageantes.
          </p>
          <br />
          <p className="text-lg sm:text-xl text-justify font-semibold text-white">
            J`ai des compétences dans l`usage des technologies front-end comme :
            <br />
            <strong>HTML/CSS</strong> : Création de structures sémantiques et de
            styles réactifs pour des sites web adaptatifs.
            <br />
            <br />
            <strong>JavaScript</strong> : Développement d`interactions
            dynamiques et de fonctionnalités riches.
            <br />
            <br />
            <strong>Frameworks</strong> : Expérience avec des frameworks
            populaires comme Next.js, Tailwind CSS et Vue.js.
            <br />
            <br />
            <strong>Outils de développement</strong> : Utilisation de Git et
            d`autres outils pour optimiser le processus de développement.
          </p>
        </div>
        <MyCv />
      </section>
    </div>
  );
}

export default A_propos;

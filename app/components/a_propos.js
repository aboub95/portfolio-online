import Image from "next/image";
import Link from "next/link";

function A_propos() {
  return (
    <div>
      <section
        id="A_Propos"
        className="h-screen bg-black flex-col gap-6: justify-center items-center bg-cover"
        style={{ backgroundImage: `url(/dev.jpeg)` }}
      >
        <h1 className="text-6xl font-bold text-center text-cyan-600">
          A propos
        </h1>
        <div className="h-1/2 bg-black w-8/12 m-auto mt-24">
          <h3></h3>
          <p className="text-xl text-justify ml-3 mr-3 font-semibold text-white">
            <h2 className="text-cyan-600 text-3xl font-bold">Hello!!!</h2> Je
            suis Abou et je suis développeur front-end passionné. Avec 1 an d
            `expérience dans le domaine du développement web, je me suis
            spécialise dans la création d`interfaces utilisateurs modernes,
            réactives et accessibles. Ma mission est de transformer des concepts
            créatifs en expériences numériques engageantes.
          </p>
          <br />
          <p className="text-xl text-white font-semibold text-justify ml-3 mr-3">
            J`ai des compétences dans l`usage des technologies front-end comme :{" "}
            <br />
            HTML/CSS : Création de structures sémantiques et de styles réactifs
            pour des sites web adaptatifs. JavaScript : Développement d
            `interactions dynamiques et de fonctionnalités riches. <br /> <br />
            Frameworks : Expérience avec des frameworks populaires comme Next
            js, Tailwind css Vue.js. Outils de développement : Utilisation de
            Git, et d `autres outils pour optimiser le processus de
            développement.
          </p>
        </div>
        {/* <form
            action="/"
            className="text-3xl font-bold flex justify-center items-center mt-10 m-10"
          >
            <label className="flex justify-between items-center p-8 rounded-2xl bg-slate-400">
              Activer les notifications !
              <input type="checkbox" className="h-6 w-6 ml-5 peer" />
              <span className="bg-gray-300 w-11 h-7 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-green-600 peer-checked:after:translate-x-4"></span>
            </label>
          </form> */}
      </section>
    </div>
  );
}

export default A_propos;

import Image from "next/image";
import Link from "next/link";

function MyContact() {
  return (
    <>
      <div
        className="h-screen bg-red-500 flex justify-center items-center bg-cover"
        style={{ backgroundImage: `url(/taf.gif)` }}
      >
        <div className="h-1/2 w-1/2 bg-gray-400 opacity-1 rounded-xl grid-cols-2 ml-64  justify-center gap-3 items-center">
          <div className="grid-cols-1 justify-center ml-14 items-center">
            <input
              type="text"
              className="h-12 border-none w-60 mt-10 ml-7  rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
              placeholder="Nom"
            />
            <input
              type="text"
              className="h-12 border-none w-60 mt-10 ml-7 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
              placeholder="Prénom"
            />
          </div>
          <div className="grid-cols-1 ml-14 justify-center items-center">
            <input
              type="text"
              className="h-12 border-none w-60 mt-10 ml-7  rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
              placeholder="Email"
            />
            <input
              type="text"
              className="h-12 border-none mt-10 ml-7 w-60 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
              placeholder="Téléphone"
            />
          </div>
          <input
            type="texte"
            className="h-40 w-1/2 ml-28 mt-10 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
            placeholder="Message"
          />
          <button className="h-10 w-28 bg-cyan-500 text-white rounded-xl">
            Envoyer
          </button>
        </div>
      </div>
    </>
  );
}

export default MyContact;

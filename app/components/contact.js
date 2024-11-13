import Image from "next/image";
import Link from "next/link";

function MyContact() {
  return (
    <form
      action="https://fr.pinterest.com/pin/16818198600952699/"
      id="Contact"
      className="min-h-screen bg-red-500 flex justify-center items-center bg-cover p-4"
      style={{ backgroundImage: `url(/taf.gif)` }}
    >
      <div className="bg-gray-400 opacity-90 rounded-xl p-8 w-full max-w-4xl flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <input
            type="text"
            className="h-12 w-11/12 md:w-10/12 mt-4 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
            placeholder="Nom"
          />
          <input
            type="text"
            className="h-12 w-11/12 md:w-10/12 mt-4 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
            placeholder="Prénom"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <input
            type="email"
            className="h-12 w-11/12 md:w-10/12 mt-4 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="h-12 w-11/12 md:w-10/12 mt-4 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
            placeholder="Téléphone"
          />
        </div>
        <textarea
          className="h-40 w-11/12 md:w-10/12 mt-4 rounded-xl p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
          placeholder="Message"
        />
        <button
          type="submit"
          className="h-12 w-32 bg-cyan-500 text-white rounded-xl mt-4"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default MyContact;

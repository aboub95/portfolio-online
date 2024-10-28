import Image from "next/image";
import Link from "next/link";

function MyCv() {
  return (
    <div>
      <form
        action="/"
        className="text-xl font-bold flex justify-around items-center mt-5 m-5"
      >
        <label className="flex justify-between items-center p-8 rounded-2xl bg-cyan-500 w-52 h-14">
          <input type="checkbox" className="h-8 w-10 ml-5 peer" />
          <span className="bg-gray-300 w-48 h-12 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-green-600 peer-checked:after:translate-x-4">
            Cv
          </span>
        </label>
      </form>
      {/* <div
        action="/"
        className="h-14 w-36 bg-slate-500 rounded-full flex justify-around items-center"
      >
        <input type="checkbox" className="h-8 w-10 ml-5 peer" />
        <button className="bg-gray-300 w-36 h-14 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-green-600 peer-checked:after:translate-x-4">
          portfolio
        </button>
      </div> */}
    </div>
  );
}

export default MyCv;

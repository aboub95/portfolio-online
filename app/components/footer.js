import Image from "next/image";
import Link from "next/link";

function MyFooter() {
  return (
    <div className="bg-black flex flex-col md:flex-row md:justify-around items-center py-6 gap-4">
      <div className="flex items-center justify-center md:w-1/3">
        <Link href="#Accueil">
          <Image
            src="/hut.svg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-3xl"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center md:w-1/3 text-center">
        <div className="flex justify-center gap-6 my-4">
          <Image src="/Linkedin.png" alt="LinkedIn" width={25} height={25} />
          <Image src="/Facebook.png" alt="Facebook" width={25} height={25} />
          <Image src="/Instagram.png" alt="Instagram" width={25} height={25} />
        </div>
        <p className="text-sm text-white">© 2024 Tous Droits Réservés</p>
      </div>
    </div>
  );
}

export default MyFooter;

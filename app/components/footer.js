import Image from "next/image";
import Link from "next/link";

function MyFooter() {
  return (
    <div className="h-52 gap-2 bg-black flex justify-around items-center">
      <div className="h-28 bg-black w-28 m-3">
        <Image
          src="/Abou.jpeg"
          alt="linkdin"
          width={50}
          height={70}
          className="rounded-3xl"
        />
      </div>
      <div className="h-1/2 bg-black flex-col pt-2 justify-around items-center w-72 m-3">
        <div className="flex justify-around items-center">
          <Image src="/Linkedin.png" alt="linkdin" width={25} height={25} />
          <Image src="/Facebook.png" alt="facebook" width={25} height={25} />
          <Image src="/Instagram.png" alt="Instagram" width={25} height={25} />
        </div>
        <p className="mt-10 flex justify-center items-center text-white">
          Copyringht 2024 Tous Droits Reserver@{" "}
        </p>
      </div>
    </div>
  );
}

export default MyFooter;

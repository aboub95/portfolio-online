import MyNav from "./components/NavBar";
import CardC from "./components/compétences";
import A_propos from "./components/a_propos";
import Accueil from "./components/section1";
import MyProject from "./components/project";
import MyFooter from "./components/footer";

import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <MyNav />
      <Accueil />
      <A_propos />
      <CardC />
      <MyProject />
      <MyFooter />
    </div>
  );
}

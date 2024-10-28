import MyNav from "./components/NavBar";
import CardC from "./components/compétences";
import A_propos from "./components/a_propos";
import Accueil from "./components/Accueil";
import MyProject from "./components/project";
import MyFooter from "./components/footer";
import MyContact from "./components/contact";

export default function page() {
  return (
    <div>
      <MyNav />
      <Accueil /> 
      <A_propos />
      <CardC />
      <MyProject />
      <MyContact />
      <MyFooter />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import MySlider from "./splide";

function MyProject() {
  return (
    <div>
      <section
        id="projects"
        className="h-screen bg-cover"
        style={{ backgroundImage: `url(/abou2.gif)` }}
      >
        <h1>Mes project</h1>
        <MySlider />
      </section>
    </div>
  );
}

export default MyProject;

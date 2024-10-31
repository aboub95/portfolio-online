import Image from "next/image";
import MySlider from "./splide";

function CardC() {
  return (
    <section id="Technologies">
      <div
        className="h-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-cover"
        style={{ backgroundImage: `url(py.gif)` }}
      >
        <MySlider />
      </div>
    </section>
  );
}

export default CardC;

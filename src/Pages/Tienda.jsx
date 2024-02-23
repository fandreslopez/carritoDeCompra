import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import tendencias from "../components/assets/data";
import nuevacoleccion from "../components/assets/new_collections";

function Tienda() {
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo={"Tendencias"} />
      <Cards data={nuevacoleccion} titulo={"Nueva coleccion"} />
    </>
  );
}

export default Tienda;

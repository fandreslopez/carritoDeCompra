import banner_mens from "../components/assets/banner_mens.png";
import Cards from "../components/Cards/Cards";
import all from "../components/assets/all_product";

function Hombres() {
  let hombres = all.filter((elemento) => elemento.categoria === "hombre");

  return (
    <>
      <img src={banner_mens} alt="banner_mens" style={{ width: "100%" }} />
      <Cards data={hombres} titulo={"Moda Hombre"}></Cards>
    </>
  );
}

export default Hombres;

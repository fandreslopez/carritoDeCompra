import banner_women from "../components/assets/banner_women.png";
import Cards from "../components/Cards/Cards";
import all from "../components/assets/all_product";

function Mujeres() {
  return (
    <>
      <img src={banner_women} alt="banner_women" />
      <Cards data={all.slice(0, 12)} titulo={"Moda Mujer"}></Cards>
    </>
  );
}

export default Mujeres;

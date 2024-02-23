import banner_kids from "../components/assets/banner_kids.png";
import Cards from "../components/Cards/Cards";
import all from "../components/assets/all_product";

function Ninos() {
  return (
    <>
      <img src={banner_kids} alt="banner_kids" />
      <Cards data={all.slice(25)} titulo={"Moda Niños"}></Cards>
    </>
  );
}

export default Ninos;

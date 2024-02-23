import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
function NavBar({ producto }) {
  const [menu, setMenu] = useState();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>CORONA</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Tienda {menu === "tienda" ? <hr /> : <> </>}
          </Link>
        </li>
        <li onClick={() => setMenu("hombre")}>
          <Link
            to="/hombres"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Hombre {menu === "hombre" ? <hr /> : <> </>}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link
            to="/mujeres"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Mujer {menu === "mujer" ? <hr /> : <> </>}
          </Link>
        </li>
        <li onClick={() => setMenu("niños")}>
          <Link
            to="/ninos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Niños {menu === "ninos" ? <hr /> : <> </>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <Drawer producto={producto}></Drawer>
      </div>
    </div>
  );
}

export default NavBar;

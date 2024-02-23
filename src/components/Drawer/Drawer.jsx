import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { CarritoCompra } from "../../App";

export default function RightDrawer({ producto }) {
  const [state, setState] = useState({
    right: false,
  });

  const carrito = useContext(CarritoCompra);

  const toggleDrawer = (open) => () => {
    setState({ ["right"]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 270 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <p>{producto && producto.nombre}</p>
    </Box>
  );

  return (
    <>
      <div
        style={{ marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
        onClick={toggleDrawer(true)}
      >
        <div className="nav-login-cart">
          <img src={cart_icon} alt="carrito" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

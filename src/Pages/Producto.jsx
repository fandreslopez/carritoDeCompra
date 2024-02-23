import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../components/assets/all_product";

import Typography from "@mui/material/Typography";

import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Producto({ carrito, setCarrito }) {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  const generarPedido = (producto) => {
    const split = producto.nombre.split(" ", 3);

    producto["cantidad"] = 1;
    producto[
      "codigo"
    ] = `${split[0][0]}-${split[1][0]}-${split[2][0]}-${producto.id}`;

    const nuevaArray = [...carrito, producto];
    setCarrito(nuevaArray);
  };

  useEffect(() => {
    const datos = data.find((elemento) => elemento.id == id);
    setProducto(datos);
  }, []);
  const clp = (number) => {
    // Formatea el número como un valor monetario con separadores de miles y decimales
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(number);
    return formattedNumber;
  };

  return (
    <>
      {producto && (
        <Container>
          <Grid container sx={{ mt: "40px" }}>
            <Grid item xs={12} sm={6}>
              <img src={producto.imagen} style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ padding: "15px" }}>
              <Typography variant="h5">
                <b>detalle: </b>
                {producto.nombre}
              </Typography>
              <Typography variant="h5" sx={{ mt: "30px" }}>
                <b>Categoría: </b>
                {producto.categoria}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ mt: "30px" }}
              >
                <b>precio: </b>
                {clp(producto.precio_anterior)}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                <b>descuento: </b>
                {clp(producto.precio_anterior - producto.nuevo_precio)}
              </Typography>
              <Typography variant="h6" sx={{ mt: "30px", textAlign: "right" }}>
                <b>descuento: </b>
                {clp(producto.nuevo_precio)}
              </Typography>
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button
                  color="error"
                  variant="outlined"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => generarPedido(producto)}
                >
                  Agregar al carro
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

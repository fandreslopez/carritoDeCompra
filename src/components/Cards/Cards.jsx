import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./Cards.css";

export default function MediaCard({ data, titulo }) {
  const formatNumberToChileanPesos = (number) => {
    // Formatea el número como un valor monetario con separadores de miles y decimales
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(number);
    return formattedNumber;
  };

  const navigate = useNavigate();

  const handleDivClick = (key) => {
    navigate(`/producto/${key}`);
  };

  return (
    <Container className="cont" sx={{ margin: "0px" }}>
      <Typography
        component="h1"
        sx={{ fontSize: "80px", textAlign: "center", mb: "40px" }}
      >
        {titulo}
      </Typography>
      <Grid container className="grilla-cont">
        {data.map((elemento, index) => (
          <Grid
            item
            className="grilla"
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={index}
            onClick={(_) => handleDivClick(elemento.id)}
          >
            <Card className="card">
              <CardMedia component={"img"} image={elemento.imagen} />
              <CardContent sx={{ minHeight: "133px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", color: "dodgerblue" }}
                >
                  {formatNumberToChileanPesos(elemento.nuevo_precio)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elemento.nombre}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Antes</Button>
                <Button size="small">
                  {formatNumberToChileanPesos(elemento.precio_anterior)}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

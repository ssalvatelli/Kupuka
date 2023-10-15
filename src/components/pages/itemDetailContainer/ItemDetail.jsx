import "./ItemDetail.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../../commons/itemCount/ItemCount";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function ItemDetail({ item }) {
  return (
    <StyledEngineProvider injectFirst>
      <div className="card">
        <Card className="cardItemDetail">
          <Grid container alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="410"
                image={item.img}
                alt={item.name}
                className="itemDetailImg"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <h2>$ {new Intl.NumberFormat("es-AR").format(item.price)}</h2>
                <p className="read-the-docs">Stock: {item.stock}</p>
                <ItemCount
                  stock={item.stock}
                  onAdd={(count) => console.log("Cantidad agregada:", count)}
                />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    </StyledEngineProvider>
  );
}

export default ItemDetail;

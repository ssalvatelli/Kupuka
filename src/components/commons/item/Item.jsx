import "./Item.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function Item({ item }) {
  return (
    <StyledEngineProvider injectFirst>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="gridItem">
        <Card sx={{ maxWidth: 345 }} className="cardItem">
          <CardActionArea>
            <Link to={`/item/${item.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.name}
                className="itemImg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description.substr(0, 123) + "..."}
                </Typography>
                <p>$ {new Intl.NumberFormat("es-AR").format(item.price)}</p>
                <p className="read-the-docs">Stock: {item.stock}</p>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Item;

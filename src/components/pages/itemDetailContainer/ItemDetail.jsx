import "./ItemDetail.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../../commons/itemCount/ItemCount";
import CircularProgress from "@mui/material/CircularProgress";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function ItemDetail({ item, onAdd, countAdded }) {
  return (
    <StyledEngineProvider injectFirst>
      <div className="card">
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!item.id}
        >
          <CircularProgress color="primary" />
        </Backdrop>
        {item.id && (
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
                  {countAdded > 0 ? (
                    <div className="buttons">
                      <Link to="/">
                        <button>Seguir comprando</button>
                      </Link>
                      <Link to="/cart">
                        <Button
                          variant="outlined"
                          startIcon={<ShoppingCartOutlinedIcon />}
                        >
                          Ir al carrito
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <ItemCount
                      onAdd={onAdd}
                      stock={item.stock}
                      initial={item.quantity}
                    />
                  )}
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )}
      </div>
    </StyledEngineProvider>
  );
}

export default ItemDetail;

import "./Cart.css";
import { useContext } from "react";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import emptyCart from "../../../assets/emptyCart.png";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { CartContext } from "../../../context/CartContext";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

function Cart() {
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <div className="card">
      {cart.length === 0 ? (
        <>
          <img src={emptyCart} alt="Carrito vacío" />
          <h1>¡Oh, no! Parece que el carrito está vacío</h1>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </>
      ) : (
        <List dense={true} className="cartList">
          {cart.map((item, index) => {
            return (
              <Slide
                in={true}
                key={item.id}
                style={{ transitionDelay: index * 300 }}
              >
                <ListItem
                  divider={true}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      title="Eliminar"
                      onClick={() => removeItem(item.id)}
                    >
                      <ClearRoundedIcon color="info" fontSize="small" />
                    </IconButton>
                  }
                >
                  <Link to={`/item/${item.id}`}>
                    <ListItemAvatar>
                      <Badge
                        badgeContent={item.quantity}
                        overlap="circular"
                        color="info"
                      >
                        <Avatar
                          src={item.img}
                          alt={item.name}
                          className="avatarImg"
                        />
                      </Badge>
                    </ListItemAvatar>
                  </Link>
                  <ListItemText
                    className="cartItem"
                    primary={
                      <Link to={`/item/${item.id}`}>
                        <u>{item.name}</u>
                      </Link>
                    }
                    secondary={
                      "$ " + new Intl.NumberFormat("es-AR").format(item.price)
                    }
                  />
                  <ListItemText>
                    <b>
                      ${" "}
                      {new Intl.NumberFormat("es-AR").format(
                        item.quantity * item.price
                      )}
                    </b>
                  </ListItemText>
                </ListItem>
              </Slide>
            );
          })}
          <Slide in={true} style={{ transitionDelay: cart.length * 300 }}>
            <div className="totalCart">
              <h3>Total:</h3>
              <h3>
                ${" "}
                {new Intl.NumberFormat("es-AR").format(
                  cart.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )
                )}
              </h3>
            </div>
          </Slide>
          <Slide in={true} style={{ transitionDelay: cart.length * 300 }}>
            <div className="totalCart">
              <Button color="error" onClick={clear} startIcon={<DeleteIcon />}>
                Vaciar carrito
              </Button>
              <Button variant="outlined" startIcon={<ShoppingBagIcon />}>
                Terminar compra
              </Button>
            </div>
          </Slide>
        </List>
      )}
    </div>
  );
}

export default Cart;

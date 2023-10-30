import { useContext } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      to="/cart"
      style={{ visibility: totalQuantity > 0 ? "visible" : "hidden" }}
    >
      <Badge badgeContent={totalQuantity} color="primary">
        <ShoppingCartTwoToneIcon />
      </Badge>
    </Link>
  );
}

export default CartWidget;

import Badge from "@mui/material/Badge";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function CartWidget() {
  return (
    <Badge badgeContent={0} color="primary" showZero>
      <ShoppingCartTwoToneIcon />
    </Badge>
  );
}

export default CartWidget;

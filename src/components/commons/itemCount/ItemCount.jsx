import "./ItemCount.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

function ItemCount({ initial = 1, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  function decrement() {
    if (count > 1) setCount(count - 1);
  }

  function increment() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="counter">
      {stock > 0 && (
        <div className="controls">
          <IconButton onClick={decrement} size="small">
            <RemoveIcon color="primary" fontSize="small" />
          </IconButton>
          <h4>{count}</h4>
          <IconButton onClick={increment} size="small">
            <AddIcon color="primary" fontSize="small" />
          </IconButton>
        </div>
      )}
      <button onClick={() => onAdd(count)} disabled={!stock}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

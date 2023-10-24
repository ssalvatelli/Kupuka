import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemById } from "../../../asyncMock";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

function ItemDetailContainer() {
  const [countAdded, setCountAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    getItemById(+id)
      .then((response) => setItem(response))
      .catch((error) => console.error(error));
  }, [id]);

  function handleAdd(count) {
    setCountAdded(count);
    addItem(item, count);
  }

  return <ItemDetail item={item} onAdd={handleAdd} countAdded={countAdded} />;
}

export default ItemDetailContainer;

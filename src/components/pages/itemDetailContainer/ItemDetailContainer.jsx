import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../../asyncMock";

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const [countAdded, setCountAdded] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    getItemById(+id)
      .then((response) => setItem(response))
      .catch((error) => console.error(error));
  }, [id]);

  function handleAdd(count) {
    setCountAdded(count);
  }

  return <ItemDetail item={item} onAdd={handleAdd} countAdded={countAdded} />;
}

export default ItemDetailContainer;

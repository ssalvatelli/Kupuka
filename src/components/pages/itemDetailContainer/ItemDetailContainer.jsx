import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../../asyncMock";

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getItemById(+id)
      .then((response) => setItem(response))
      .catch((error) => console.error(error));
  }, [id]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;

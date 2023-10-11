import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getItemById } from "../../../asyncMock";

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItemById(5)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;

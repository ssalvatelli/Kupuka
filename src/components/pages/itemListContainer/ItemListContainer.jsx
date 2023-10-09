import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getItems } from "../../../asyncMock";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <ItemList greeting={greeting} items={items} />;
}

export default ItemListContainer;

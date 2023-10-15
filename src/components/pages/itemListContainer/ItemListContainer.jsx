import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategory, getItems } from "../../../asyncMock";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const asynFunc = id ? getItemsByCategory : getItems;

    asynFunc(id)
      .then((response) => setItems(response))
      .catch((error) => console.error(error));
  }, [id]);

  return <ItemList items={items} />;
}

export default ItemListContainer;

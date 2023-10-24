import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategory, getItems } from "../../../asyncMock";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const asyncFunc = category ? getItemsByCategory : getItems;

    window.scrollTo(0, 0);

    asyncFunc(category)
      .then((response) => setItems(response))
      .catch((error) => console.error(error));
  }, [category]);

  return <ItemList items={items} />;
}

export default ItemListContainer;

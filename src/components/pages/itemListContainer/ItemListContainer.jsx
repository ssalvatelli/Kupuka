import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    window.scrollTo(0, 0);

    const itemsCollection = category
      ? query(
          collection(db, "items"),
          where("category", "array-contains", category)
        )
      : collection(db, "items");

    getDocs(itemsCollection)
      .then((response) =>
        setItems(
          response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        )
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return <ItemList loading={loading} items={items} />;
}

export default ItemListContainer;

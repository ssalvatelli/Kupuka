import ItemDetail from "./ItemDetail";
import { db } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

function ItemDetailContainer() {
  const { id } = useParams();

  const [countAdded, setCountAdded] = useState(0);

  const { cart, addItem } = useContext(CartContext);

  const [item, setItem] = useState(cart.find((item) => item.id === id) || {});

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!item.id) {
      getDoc(doc(db, "items", id))
        .then((response) => setItem({ id: response.id, ...response.data() }))
        .catch((error) => console.error(error));
    }
  }, [id]);

  function handleAdd(count) {
    setCountAdded(count);
    addItem(item, count);
  }

  return <ItemDetail item={item} countAdded={countAdded} onAdd={handleAdd} />;
}

export default ItemDetailContainer;

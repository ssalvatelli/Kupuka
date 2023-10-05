import ItemCount from "../../commons/itemCount/ItemCount";

function ItemListContainer({ greeting }) {
  return (
    <div className="card">
      <h1>{greeting}</h1>
      <ItemCount
        stock={23}
        onAdd={(count) => console.log("Cantidad agregada:", count)}
      />
    </div>
  );
}

export default ItemListContainer;

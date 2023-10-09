import Grid from "@mui/material/Grid";
import Item from "../../commons/item/Item";
import ItemCount from "../../commons/itemCount/ItemCount";

function ItemList({ greeting, items }) {
  return (
    <div className="card">
      <h1>{greeting}</h1>
      <Grid container spacing={3}>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </Grid>
      <ItemCount
        stock={23}
        onAdd={(count) => console.log("Cantidad agregada:", count)}
      />
    </div>
  );
}

export default ItemList;

import Grid from "@mui/material/Grid";
import Item from "../../commons/item/Item";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";

function ItemList({ greeting, items }) {
  return (
    <div className="card">
      <h1>{greeting}</h1>
      <Grid container spacing={3}>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </Grid>
      <ItemDetailContainer />
    </div>
  );
}

export default ItemList;

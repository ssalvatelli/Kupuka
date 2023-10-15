import Grid from "@mui/material/Grid";
import Item from "../../commons/item/Item";

function ItemList({ items }) {
  return (
    <div className="card">
      <Grid container spacing={3}>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </Grid>
    </div>
  );
}

export default ItemList;

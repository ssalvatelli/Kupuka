import Grid from "@mui/material/Grid";
import Item from "../../commons/item/Item";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function ItemList({ loading, items }) {
  return (
    <div className="card">
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={3}>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </Grid>
    </div>
  );
}

export default ItemList;

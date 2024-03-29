
import List from './_displayView/List';
import Grid from './_displayView/Grid';

const ItemsList = ({grid, list}) => {
 
  return (
    <div className="items_list_wrapper d-flex">
      <Grid grid={grid} />
      <List list={list} />
    </div>
  )
}

export default ItemsList
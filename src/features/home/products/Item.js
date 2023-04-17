import { useDispatch } from "react-redux";
import { openModal } from "../../system/systemSlice";
import { useEffect } from "react";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("re-rendered");
  })
  
  return (
    <div className="item_product" onClick={ () => dispatch(openModal({type: "item", item})) }>
        <div className="weight">
            <span className='weight__unit'>{item.weight} kg</span>
        </div>
        <div className="item__img">
            <img src={item.img} alt="" />
        </div>
        <div className="item_detail d-flex justify-content-between">
            <span className="item__name">{item.name}</span >
            <span className="item__price">${item.price}</span >
        </div>
    </div>
  )
}

// Item.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   inCart: PropTypes.bool.isRequired
// };

export default Item
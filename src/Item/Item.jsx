import { Link } from "react-router-dom";
import "./Item.css";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export default function Item({ item }) {
  const isGrid = useSelector((state) => state.visual.itemsGrid);

  const handleAddToBasket = (id) => {
    const existingArray = JSON.parse(localStorage.getItem('basket')) || [];
    const newItem = id;
    existingArray.push(newItem);
    localStorage.setItem('basket', JSON.stringify(existingArray));
    console.log('ss')
  }

  return (
    <>
      <div className={isGrid ? "item" : "item list"} key={item._id}>
        <img className="item-image" src={item.imageUrl} alt="" />
        <p className="item-title">
          <Link to={`/item/${item._id}`}>{item.title} </Link>
        </p>
        <p className="cost">{item.cost} руб.</p>
        <button className="item-button" onClick={() => handleAddToBasket(item._id)}>купить</button>
        {item.discount ? (
          <p className="item-discount">-{item.discount}%</p>
        ) : null}
      </div>
    </>
  );
}

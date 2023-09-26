import { useEffect, useState } from "react";
import "./BasketHover.css";
import axios from "../axios";
import { Link } from "react-router-dom";

export default function BasketHover() {
  const existingArray = JSON.parse(localStorage.getItem("basket")) || [];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const existingArray = JSON.parse(localStorage.getItem("basket")) || [];
    axios
      .get(`/getBasketItems?ids=${existingArray.join(",")}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.log("ddddeerer"));
  });
    let totalCost = 0;
    for(let i = 0; i < data.length; i++){
      totalCost += data[i].cost;
    }
  return (
    <div className="basket-hover">
      <div>
        {data.map((item) => (
          <div className="basket-item">
            <div className="basket-image-div">
              <img className="basket-image" src={item.imageUrl}></img>
            </div>
            <div className="basket-item-info">
              <p>{item.cost} $</p>
              <p>
                <Link to={`/item/${item._id}`}>{item.title}</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-cost"> Итого: {totalCost} $</div>
    </div>
  );
}

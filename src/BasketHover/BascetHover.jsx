import { useEffect } from "react";
import "./BasketHover.css";
import axios from "../axios";

export default function BasketHover() {
  const existingArray = JSON.parse(localStorage.getItem("basket")) || [];
  useEffect(() => {
    const existingArray = JSON.parse(localStorage.getItem("basket")) || [];
    const body = {
        array: existingArray,
    }
    axios
      .post("/getBasketItems")
      .then((res) => {
        // setData(res.data);
        // setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.warn(err));
  });
  return (
    <div className="basket-hover">
      dsfsfsd
      <div>
        {existingArray.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

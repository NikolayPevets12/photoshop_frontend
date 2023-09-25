// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import SidebarInfo from "../SidebarInfo/SidebarInfo";
import SortPanel from "../SortPanel/SortPanel";
import "./Items.css";
import { useEffect, useState } from "react";
import axios from "../axios";
import Preloader from "../Preloader/Preloader";
import { useSelector } from "react-redux";
import Item from "../Item/Item";

export default function Items() {
  const { category, brand } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isGrid = useSelector((state) => state.visual.itemsGrid);
  let apiUrl = `/getItems`;
  if (category) {
    apiUrl += `/${category}`;
  }
  if (brand) {
    apiUrl += `/${brand}`;
  }

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="items">
          <SidebarInfo />
          <div>
            <SortPanel />
            <div className="items-inner">
              {isLoading ? (
                <Preloader />
              ) : (
                data.map((item, index) => <Item item={item} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

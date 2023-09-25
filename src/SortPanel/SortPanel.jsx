import "./SortPanel.css";
import { PiSquaresFour } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import { setItemsGrid } from "../redux/slices/visual";
import { useParams } from "react-router-dom";
import { setBrand, setCategory } from "../redux/slices/filters";

export default function SortPanel() {
  // const setItemsGrid = useSelector(setItemsGrid)
  const {category, brand} = useParams()
  const dispatch = useDispatch();
  dispatch( setCategory(category))
  dispatch( setBrand(category))
  
  const category1 = useSelector((state) => state.filters.category);
  const brand1 = useSelector((state) => state.filters.brand);
  console.log(category,brand , 'cb')
  const isGrid = useSelector((state) => state.visual.itemsGrid);
  console.log("isGrid", isGrid);
  useEffect(() => {
    axios
      .get(`/getItemsAmount/${category}/${brand}`)
      .then((res) => {
        setItemsAmount(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.warn(err));
  }, []);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [showSort, setShowSort] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const handleShowSort = () => {
    setShowSort(!showSort);
  };
  const handleShowAmount = () => {
    setShowAmount(!showAmount);
  };

  const handleSetGrid = (boolean) => {
    dispatch(setItemsGrid(boolean));
  };
  return (
    <>
      <div className="sort-panel">
        <div className="left">
          <div className="button-group">
            <button>
              <PiSquaresFour
                size={30}
                color={isGrid ? "black" : "white"}
                onClick={() => handleSetGrid(true)}
              />
            </button>
            <button>
              <GiHamburgerMenu
                size={30}
                color={!isGrid ? "black" : "white"}
                onClick={() => handleSetGrid(false)}
              />
            </button>
            Найдено {itemsAmount} товаров
          </div>
        </div>
        <div className="center">
          <div className="sort-by" onClick={handleShowSort}>
            Сортировка
            {showSort ? (
              <ul>
                <li>Без сортировки</li>
                <li>По возрастанию цены</li>
                <li>По убыванию цены</li>
                <li>По названию от А до Я</li>
                <li>По названю от Я до А</li>
              </ul>
            ) : null}
          </div>
        </div>
        <div className="right">
          <div className="sort-by" onClick={handleShowAmount}>
            Показывать по:
          </div>
          {showAmount ? (
            <ul>
              <li>12</li>
              <li>24</li>
              <li>48</li>
            </ul>
          ) : null}
        </div>
      </div>
      {/* <div className="sort-panel-dropdown">
        
    </div> */}
    </>
  );
}

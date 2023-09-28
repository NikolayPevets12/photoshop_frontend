import "./Header.css";
import Logo from "../Images/Logo.png";
import Loc from "../Images/loc.png";
import { SlBasket } from "react-icons/sl";
import { PiScales } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchPanel from "../SearchPanel/SearchPanel";
import { Link } from "react-router-dom";
import BasketHover from "../BasketHover/BasketHover";
import { useState } from "react";
import classes from './Header.module.css';

export default function Header() {
  const [showBasket, setShowBasket] = useState(false);

  const handleMouseEnter = () => {
    setShowBasket(true);
  };
  const handleMouseLeave = () => {
    setShowBasket(false);
  };

  return (
    <section className={classes.header}>
      <div className={classes.header_menu}>
        <ul className="header_menu_list">
          <li className="header_menu_item">
            <a href="">О нас</a>
          </li>
          <li className="header_menu_item">
            <a href="">Оплата</a>
          </li>
          <li className="header_menu_item">
            <Link to="/delivery">Доставка</Link>
          </li>
          <li className="header_menu_item">
            <Link to="/contacts">Контакты</Link>
          </li>
          <li className="header_menu_item">
            <a href="">Отзывы</a>
          </li>
        </ul>
      </div>
      <div className="header_adress_panel">
        <div className="header_logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="header_phones">
          <a href="tel:8 029 672-33-33">8 025 780-00-00</a>
          <a href="tel:8 029 872-33-33">8 029 872-33-33</a>
          <a href="tel:8 029 577-77-17">8 029 577-77-17</a>
          <a href="tel:8 029 577-77-17">8 029 577-77-17</a>
          <a href="tel:8 029 665-10-10">8 029 665-10-10</a>
        </div>
        <div className="header_localization">
          <img src={Loc} />
        </div>
      </div>
      <div className="header_search_panel">
        <div className="header_catalog">
          <GiHamburgerMenu color="white" />
          Каталог
        </div>

        <SearchPanel />
        <div className="header_basket_icons">
          <Link
            to="/basket"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <SlBasket size={30} className="icn" />
            Корзина
            {showBasket ? <BasketHover /> : null}
          </Link>
          <a href="">
            <PiScales size={30} />
            Сравнение
          </a>
        </div>
      </div>
    </section>
  );
}

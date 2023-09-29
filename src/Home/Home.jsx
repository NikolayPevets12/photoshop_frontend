import Content from "../Content/Content";
import Delivery from "../Delivery/Delivery";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Items from "../Items/Items";
import FullItem from "../FullItem/FullItem";
import "./Home.css";
import { Routes, Route, Switch } from "react-router-dom";
import Contacts from "../Contacts/Contacrs";
import Basket from "../Basket/Basket";
import AddItem from '../AddItem/AddItem'
function Home() {
  return (
    <div className="Home">
      <Routes>
        <Route path="/items/:category?/:brand?" element={<Items />} />
        <Route path="/" element={<Content />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/item/:itemId" element={<FullItem />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/admin/addItem" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default Home;

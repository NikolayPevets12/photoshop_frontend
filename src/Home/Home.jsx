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

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="/items/:category?/:brand?" element={<Items />} />
        <Route path="/" element={<Content />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/item/:itemId" element={<FullItem />} />
        <Route path="/contacts" element={<Contacts/> } /> 
        <Route path="/basket" element={<Basket/> } /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;

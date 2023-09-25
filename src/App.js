import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AddItem from "./AddItem/AddItem";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/addItem" element={<AddItem />} />
      </Routes> */}
      <Home/>
      {/* <Home/> */}
    </div>
  );
}

export default App;

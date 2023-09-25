import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    console.log(activeItem);
    setActiveItem(index);
  };
  const handleMouseLeave = () => {
    setActiveItem(null);
  };
  const itemsListArray = [
    {
      category: "Фотоаппараты",
      id: 1,
      category: "cameras",
      brands: ["John", "Doe"],
    },
    { category: "Объективы", id: 2, brands: ["Alice", "Smith"] },
    { category: "фотоаппараты3", id: 3, brands: ["Bob", "Johnson"] },
    { category: "фотоаппараты33", id: 4, brands: ["Bob", "Johnson"] },
    { category: "фотоаппараты4", id: 5, brands: ["Bob", "Johnson"] },
    { category: "фотоаппараты5", id: 6, brands: ["Bob", "Johnson"] },
  ];

  // const itemsList2 = {
  //   category: "cameras",
  //   brands: ["Canon", "Nikon", "Sony"],
  //   category: "lens",
  //   brands: ["Nikon", "Canon", "Sony"],
  // };
  const itemsList = itemsListArray.map((item, index) => {
    return (
      <li
        key={item.id}
        className={activeItem === index ? "menu-item active" : "menu-item"}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {/* <a href={`/items/${item.category}`}>{item.category}</a> */}
        <Link to={`/items/${item.category}`}>{item.category}</Link>
        {activeItem == index ? (
          <div className="popover">
            <p>
              {item.brands.map((item) => (
                <a>{item}</a>
              ))}
            </p>
          </div>
        ) : null}
      </li>
    );
  });
  return (
    <>
      <div>
        <ul className="sidebar">{itemsList}</ul>
      </div>
    </>
  );
}

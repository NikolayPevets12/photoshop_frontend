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
      id: 1,
      title: "Камеры",
      brands: ["John", "Doe"],
      link: "cameras",
    },
    { title: "Объективы", id: 2, brands: ["Canon", "Nikon"], link: "lens" },
    { title: "Умне часы", id: 3, brands: ["Bob", "Johnson"], link: "lens" },
    { title: "Наушники", id: 4, brands: ["Bob", "Johnson"], link: "lens" },
    { title: "Карты памяти", id: 5, brands: ["Bob", "Johnson"], link: "lens" },
    {
      title: "Очки VR / Приставки",
      id: 6,
      brands: ["Bob", "Johnson"],
      link: "vr",
    },
  ];

  const itemsList = itemsListArray.map((item, index) => {
    return (
      <li
        key={item.id}
        className={activeItem === index ? "menu-item active" : "menu-item"}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {/* <a href={`/items/${item.category}`}>{item.category}</a> */}
        <Link to={`/items/${item.link}`}>{item.title}</Link>
        {activeItem == index ? (
          <div className="popover">
            <p>
              {item.brands.map((item, index) => (
                <a href={item}>{item}</a>
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

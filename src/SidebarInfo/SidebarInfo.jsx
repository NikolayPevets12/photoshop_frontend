import "./SidebarInfo.css";
import Image from "../Images/дешевле 4.jpg";

export default function SidebarInfo() {
  return (
    <div className="sidebar-info">
      <img src={Image} alt="" />
      <div className="sidbar-time">
        <div className="sidebar-phones">
          <a href="tel:123-456-7890">123-456-7890</a>
          <a href="tel:123-456-7890">123-456-7890</a>
          <a href="tel:123-456-7890">123-456-7890</a>
          <a href="tel:123-456-7890">123-456-7890</a>
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>
        <h2>Пн.-Вc.: с 9.00 до 20.00</h2>
      </div>
    </div>
  );
}
